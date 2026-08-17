#!/usr/bin/env bun

import { Command } from "commander";
import { wakeup } from "./tui/wakeup";

const program = new Command();

program.name("claw-build").version("0.0.1").description("claw project");

program
  .command("wakeup")
  .description("Show the banner to choose CLI and telegram")
  .action(async() => {
   await wakeup();
  });

await program.parseAsync(process.argv)
