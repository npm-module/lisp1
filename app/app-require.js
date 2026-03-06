const sys = require('lisp1');

(async () => {
  console.log(sys.version());
  console.log(sys.cwd());
  console.log(sys.exists("c:/Windows/notepad.exe"));
  await sys.run(["ls", "-ltr"]);
  console.log(sys.args());
})();
