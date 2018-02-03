
import gulp from "gulp";
import {tasks} from "./client/const";

gulp.task("default", [tasks.CLIENT_WATCH]);
require('module-alias/register');

require("require-dir")("client");


require("require-dir")("server");

