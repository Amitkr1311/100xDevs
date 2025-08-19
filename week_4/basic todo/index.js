import fs from 'fs';
import { Command } from 'commander';
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Split a file into words and then count it')
    .argument('<file>', 'file to count words')
    .action((file) => {
        fs.readFile(file,'utf-8', (err,data) => {
            if(err) {
                console.log(err);
            }
            else{
                const lines = data.split(' ').length;
                console.log(lines);
            }
        });
    });

program.parse();