const gulp = require('gulp');
const ts = require('gulp-typescript');
const { spawn } = require('child_process');
const path = require('path');

// Function to create a new TypeScript project
function createTsProject() {
  return ts.createProject('tsconfig.json');
}

// Variable to store the current running process
let nodeProcess = null;

// Function to execute the compiled JavaScript file
function runScript(file) {
  if (nodeProcess) {
    nodeProcess.kill();
  }

  const filePath = path.join(__dirname, 'dist', file);

  nodeProcess = spawn('node', [filePath], { stdio: 'inherit' });

  nodeProcess.on('close', (code) => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
}

// Task to compile TypeScript files
gulp.task('scripts', function () {
  const tsProject = createTsProject();
  return gulp.src('src/**/*.ts') // Ensure it looks for .xx.ts files
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
});

// Watch task to monitor TypeScript files and run the 'scripts' and 'serve' tasks
gulp.task('watch', function () {
  const watcher = gulp.watch('src/**/*.ts', gulp.series('scripts'));
  watcher.on('change', function (filePath) {
    const relativePath = path.relative('src', filePath);
    const changedFile = relativePath.replace('.ts', '.js');
    console.log(changedFile);
    setTimeout(function () {
      runScript(changedFile);
    }, 500); // Delay execution by 500 milliseconds
  });
});

// Default task that runs the 'watch' task
gulp.task('default', gulp.series('scripts', 'watch'));