#!/bin/bash
npm install --legacy-peer-deps
npm run build

chmod +x vercel-build.sh

./vercel-build.sh
