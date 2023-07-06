// ====== SPINNER II ==========
let delay = 100;

const rounds = [
    ['|', '/', '-', '\\'],
    ['|', '/', '-', '\\', '|\n']
  ];

for (let round of rounds) {
  for (const char of round) {
    setTimeout(() => {
      process.stdout.write('\r' + char);
    }, delay);
    delay += 200;
  }
}