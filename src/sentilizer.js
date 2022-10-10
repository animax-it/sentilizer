import {PythonShell} from 'python-shell';
const promisify = require('util.promisify');

let python_shell_run = promisify(PythonShell.run);

export function sentilize(sentence){
  return new Promise(
    (resolve, reject) => {
      let options = {
        scriptPath: './',
        args: ['-s', '\"' + sentence + '\"']
      };

      python_shell_run('src/vader.py', options)
      .then(results => {
        let sentiment = results[0];
        let resp = { sentiment: 'Neutral'};
        if (sentiment === 'neg'){
          resp.sentiment = 'Negative';
        }
        else if (sentiment === 'pos'){
          resp.sentiment = 'Positive'
        }
        resolve(resp);
      })
      .catch(error => {
        reject(error);
      });
    }
  );
}
