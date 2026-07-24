# One Pace Extension for Seanime

First-class One Pace support for Seanime. Overrides episode metadata and syncs AniList progress based on One Pace episode mappings.

## Features

- Automatic detection of One Pace files (pattern: `[One Pace][8-11] Orange Town 01 [1080p][hash].mkv`)
- Custom episode metadata with arc names, manga chapters, and OP episode ranges
- Accurate AniList progress tracking
- Tray icon showing detection status

## Installation

1. Build the extension:
   ```bash
   deno run --allow-all build.ts
   ```

2. Copy the following to your Seanime plugins directory:
   - `manifest.json`
   - `code.js`
   - `data/episodes.json`

3. Restart Seanime

## File Naming Convention

Your files should follow this pattern:
```
[One Pace][opStart-opEnd] ArcName XX [resolution][hash].mkv
```

Examples:
- `[One Pace][8-11] Orange Town 01 [1080p][abc123].mkv`
- `[One Pace][228-230] Water Seven 01 [1080p][def456].mkv`

## How It Works

1. **Detection**: Scans your library for files with `[One Pace]` in the path
2. **Mapping**: Uses embedded database of 474 One Pace episodes to map OP ranges
3. **Metadata**: Overrides episode titles with arc names and chapter info
4. **Progress**: Updates AniList based on the highest OP episode in each file

## Requirements

- Seanime with plugin support enabled
- One Piece files organized by One Pace naming convention
- Files matched to One Piece (AniList ID 2185) in Seanime

## Data Source

Episode mapping data extracted from the One Pace Episode Guide spreadsheet.
