/**
 * SIP410 Boards Compliance Checker
 *
 * Validates that the portfolio meets all requirements:
 * - Each degree has 6 objectives
 * - Each objective has 2+ projects
 * - Each project has required fields: title, role, team, description, tools, links
 *
 * Run with: node scripts/checkCompliance.js
 */

import { degrees, featuredProjects } from '../src/data/portfolioData.js';

const REQUIRED_OBJECTIVES = 6;
const MIN_PROJECTS_PER_OBJECTIVE = 2;
const REQUIRED_PROJECT_FIELDS = ['title', 'role', 'team', 'description', 'tools', 'links'];

let errors = [];
let warnings = [];

console.log('\\n=== SIP410 Boards Compliance Check ===\\n');

// Check each degree
degrees.forEach((degree) => {
  console.log(`Checking ${degree.label}...`);

  // Check objective count
  if (degree.objectives.length !== REQUIRED_OBJECTIVES) {
    errors.push(`${degree.label}: Has ${degree.objectives.length} objectives, needs ${REQUIRED_OBJECTIVES}`);
  } else {
    console.log(`  ✓ Has ${REQUIRED_OBJECTIVES} objectives`);
  }

  // Check each objective
  degree.objectives.forEach((objective) => {
    const objLabel = `${degree.label} Objective ${objective.id}`;

    // Check project count
    if (objective.projects.length < MIN_PROJECTS_PER_OBJECTIVE) {
      errors.push(`${objLabel}: Has ${objective.projects.length} project(s), needs ${MIN_PROJECTS_PER_OBJECTIVE}+`);
    }

    // Check each project
    objective.projects.forEach((project, index) => {
      const projectLabel = `${objLabel} Project ${index + 1} ("${project.title}")`;

      // Check required fields
      REQUIRED_PROJECT_FIELDS.forEach((field) => {
        if (!project[field]) {
          errors.push(`${projectLabel}: Missing required field "${field}"`);
        } else if (field === 'tools' && project.tools.length === 0) {
          warnings.push(`${projectLabel}: Tools array is empty`);
        } else if (field === 'links' && Object.keys(project.links).length === 0) {
          warnings.push(`${projectLabel}: No external links provided`);
        }
      });

      // Check meetsObjective (required for objectives page)
      if (!project.meetsObjective || project.meetsObjective.length === 0) {
        warnings.push(`${projectLabel}: No "meetsObjective" bullets`);
      } else if (project.meetsObjective.length < 2) {
        warnings.push(`${projectLabel}: Only ${project.meetsObjective.length} "meetsObjective" bullet(s), recommend 2-4`);
      }
    });
  });

  const totalProjects = degree.objectives.reduce((sum, obj) => sum + obj.projects.length, 0);
  console.log(`  ✓ Total projects: ${totalProjects}`);
});

// Check featured projects
console.log('\\nChecking Featured Projects...');
if (featuredProjects.length === 0) {
  warnings.push('No featured projects defined');
} else {
  console.log(`  ✓ ${featuredProjects.length} featured projects`);
}

// Summary
console.log('\\n=== Compliance Summary ===\\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! Portfolio is SIP410 compliant.\\n');
  process.exit(0);
}

if (errors.length > 0) {
  console.log(`❌ ERRORS (${errors.length}):`);
  errors.forEach((error) => console.log(`   - ${error}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log(`⚠️  WARNINGS (${warnings.length}):`);
  warnings.forEach((warning) => console.log(`   - ${warning}`));
  console.log('');
}

// Stats
console.log('=== Statistics ===\\n');
degrees.forEach((degree) => {
  const totalProjects = degree.objectives.reduce((sum, obj) => sum + obj.projects.length, 0);
  const minProjects = Math.min(...degree.objectives.map((obj) => obj.projects.length));
  const passStatus = minProjects >= MIN_PROJECTS_PER_OBJECTIVE ? '✓' : '✗';
  console.log(`${degree.label}:`);
  console.log(`  Objectives: ${degree.objectives.length}/${REQUIRED_OBJECTIVES}`);
  console.log(`  Total Projects: ${totalProjects}`);
  console.log(`  Min Projects/Objective: ${minProjects} ${passStatus}`);
  console.log('');
});

// Exit with error code if there are errors
if (errors.length > 0) {
  console.log('Build FAILED due to compliance errors.\\n');
  process.exit(1);
}

console.log('Build passed with warnings.\\n');
process.exit(0);
