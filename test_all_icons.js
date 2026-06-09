const fs = require('fs');
const path = require('path');

const folders = ['fa', 'fa6', 'tb', 'si', 'io', 'io5', 'md', 'ti', 'go', 'fi', 'gi', 'wi', 'di', 'ai', 'bs', 'ri', 'fc', 'cg', 'vsc'];
folders.forEach(folder => {
  try {
    const pack = require(`react-icons/${folder}`);
    const keys = Object.keys(pack);
    const matchesExcel = keys.filter(k => k.toLowerCase().includes('excel'));
    const matchesVSCode = keys.filter(k => k.toLowerCase().includes('vscode') || k.toLowerCase().includes('visualstudio') || k.toLowerCase().includes('code'));
    const matchesMicrosoft = keys.filter(k => k.toLowerCase().includes('microsoft'));
    if (matchesExcel.length > 0 || matchesVSCode.length > 0 || matchesMicrosoft.length > 0) {
      console.log(`Pack ${folder} matches:`);
      if (matchesExcel.length > 0) console.log(`  Excel:`, matchesExcel);
      if (matchesVSCode.length > 0) console.log(`  VSCode:`, matchesVSCode);
      if (matchesMicrosoft.length > 0) console.log(`  Microsoft:`, matchesMicrosoft);
    }
  } catch (e) {
    // Pack not installed or error loading
  }
});
