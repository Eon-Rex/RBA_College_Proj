import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const createNoJekyllFile = async () => {
  const distPath = join(process.cwd(), 'dist');

  // Ensure the directory exists
  try {
    await access(distPath, constants.F_OK);
  } catch (err) {
    console.error('Build directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  // Create the .nojekyll file
  const noJekyllPath = join(distPath, '.nojekyll');
  try {
    await writeFile(noJekyllPath, '', 'utf8');
    console.log('.nojekyll file created successfully.');
  } catch (err) {
    console.error('Failed to create .nojekyll file:', err);
    process.exit(1);
  }
};

// Run the function
createNoJekyllFile();