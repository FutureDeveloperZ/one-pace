import * as esbuild from 'esbuild';
import * as path from 'path';

const basedir = decodeURIComponent(new URL('.', import.meta.url).pathname);
const srcdir = path.join(basedir, 'src');
const outdir = basedir;

async function build() {
  console.log('Building One Pace extension...');

  await esbuild.build({
    entryPoints: [path.join(srcdir, 'index.ts')],
    bundle: true,
    outfile: path.join(outdir, 'code.js'),
    format: 'iife',
    platform: 'browser',
    target: 'es2020',
    minify: false,
    sourcemap: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    banner: {
      js: '// One Pace Extension - Built with esbuild'
    }
  });

  console.log('Build complete: code.js');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
