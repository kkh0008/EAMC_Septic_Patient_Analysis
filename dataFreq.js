var tasks = [
{"startDate":new Date("Sun Dec 09 2:25     EST 2012"),"endDate":new Date("Sun Dec 09 05:25:00 EST 2012"),"taskName":"Fluids1","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 19:15:00 EST 2012"),"endDate":new Date("Sun Dec 09 22:15:00 EST 2012"),"taskName":"Fluids2","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 16:18:00 EST 2012"),"endDate":new Date("Sun Dec 09 19:18:00 EST 2012"),"taskName":"Fluids3","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 22:58:00 EST 2012"),"endDate":new Date("Mon Dec 10 1:58:00 EST 2012"),"taskName":"Fluids4","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 12:05:00 EST 2012"),"endDate":new Date("Sun Dec 09 15:05:00 EST 2012"),"taskName":"Fluids5","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 22:44:00 EST 2012"),"endDate":new Date("Mon Dec 10 1:44:00 EST 2012"),"taskName":"Fluids6","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 13:27:00 EST 2012"),"endDate":new Date("Sun Dec 09 16:27:00 EST 2012"),"taskName":"Fluids7","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 13:35:00 EST 2012"),"endDate":new Date("Sun Dec 09 16:35:00 EST 2012"),"taskName":"Fluids8","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 5:00:00  EST 2012"),"endDate":new Date("Sun Dec 09 8:00:00 EST 2012"),"taskName":"Fluids9","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 18:01:00 EST 2012"),"endDate":new Date("Sun Dec 09 21:01:00 EST 2012"),"taskName":"Fluids10","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 4:30:00  EST 2012"),"endDate":new Date("Sun Dec 09 7:30:00 EST 2012"),"taskName":"Fluids11","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 21:54:00 EST 2012"),"endDate":new Date("Mon Dec 10 0:54:00 EST 2012"),"taskName":"Fluids12","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 5:42:00  EST 2012"),"endDate":new Date("Sun Dec 09 8:42:00 EST 2012"),"taskName":"Fluids13","status": "RUNNING"},
{"startDate":new Date("Sun Dec 09 8:17:00  EST 2012"),"endDate":new Date("Sun Dec 09 11:17:00 EST 2012"),"taskName":"Fluids14","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 2:00:00  EST 2012"),"endDate":new Date("Sun Dec 09 5:00:00 EST 2012"),"taskName":"Anti Initial Lact Blood Cult1","status": "SUCCEEDED"},
{"startDate":new Date("Sun Dec 09 4:30:00  EST 2012"),"endDate":new Date("Sun Dec 09 7:30:00 EST 2012"),"taskName":"Anti Initial Lact Blood Cult2","status": "SUCCEEDED"},
{"startDate":new Date("Sun Dec 09 0:24:00  EST 2012"),"endDate":new Date("Sun Dec 09 3:24:00 EST 2012"),"taskName":"Anti Initial Lact Blood Cult3","status": "SUCCEEDED"},
{"startDate":new Date("Sun Dec 09 12:04:00 EST 2012"),"endDate":new Date("Sun Dec 09 15:04:00 EST 2012"),"taskName":"Anti Initial Lact Blood Cult4","status":"SUCCEEDED"},
{"startDate":new Date("Sun Dec 09 0:20:00  EST 2012"),"endDate":new Date("Sun Dec 09 6:20:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf1","status": "FAILED"},
{"startDate":new Date("Sun Dec 09 11:50:00 EST 2012"),"endDate":new Date("Sun Dec 09 17:50:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf2","status":"FAILED"},
{"startDate":new Date("Sun Dec 09 19:22:00 EST 2012"),"endDate":new Date("Mon Dec 10 1:22:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf3","status": "FAILED"},
{"startDate":new Date("Sun Dec 09 1:13:00  EST 2012"),"endDate":new Date("Sun Dec 09 7:13:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf4","status": "FAILED"},
{"startDate":new Date("Sun Dec 09 20:00:00 EST 2012"),"endDate":new Date("Mon Dec 10 2:00:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf5","status": "FAILED"},
{"startDate":new Date("Sun Dec 09 7:06:00  EST 2012"),"endDate":new Date("Sun Dec 09 13:06:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf6","status":"FAILED"},
{"startDate":new Date("Sun Dec 09 21:44:00 EST 2012"),"endDate":new Date("Mon Dec 10 3:44:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf7","status": "FAILED"},
{"startDate":new Date("Sun Dec 09 16:30:00 EST 2012"),"endDate":new Date("Sun Dec 09 22:30:00 EST 2012"),"taskName":"Repeat Vol Tissue Perf8","status":"FAILED"},
{"startDate":new Date("Sun Dec 09 7:06:00  EST 2012"),"endDate":new Date("Sun Dec 09 13:06:00 EST 2012"),"taskName":"Vassopressors Hypo1","status":"FAILED"},
{"startDate":new Date("Sun Dec 09 22:20:00 EST 2012"),"endDate":new Date("Mon Dec 10 4:20:00 EST 2012"),"taskName":"Repeat Lact1","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 17:55:00 EST 2012"),"endDate":new Date("Sun Dec 09 23:55:00 EST 2012"),"taskName":"Repeat Lact2","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 2:38:00  EST 2012"),"endDate":new Date("Sun Dec 09 8:38:00 EST 2012"),"taskName":"Repeat Lact3","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 11:50:00 EST 2012"),"endDate":new Date("Sun Dec 09 17:50:00 EST 2012"),"taskName":"Repeat Lact4","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 20:46:00 EST 2012"),"endDate":new Date("Mon Dec 10 2:46:00 EST 2012"),"taskName":"Repeat Lact5","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 21:54:00 EST 2012"),"endDate":new Date("Mon Dec 10 3:54:00 EST 2012"),"taskName":"Repeat Lact6","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 18:01:00 EST 2012"),"endDate":new Date("Mon Dec 10 0:01:00 EST 2012"),"taskName":"Repeat Lact7","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 13:57:00 EST 2012"),"endDate":new Date("Sun Dec 09 19:57:00 EST 2012"),"taskName":"Repeat Lact8","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 17:28:00 EST 2012"),"endDate":new Date("Sun Dec 09 23:28:00 EST 2012"),"taskName":"Repeat Lact9","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 0:37:00  EST 2012"),"endDate":new Date("Sun Dec 09 6:37:00 EST 2012"),"taskName":"Repeat Lact10","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 11:19:00 EST 2012"),"endDate":new Date("Sun Dec 09 17:19:00 EST 2012"),"taskName":"Repeat Lact11","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 13:27:00 EST 2012"),"endDate":new Date("Sun Dec 09 19:27:00 EST 2012"),"taskName":"Repeat Lact12","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 19:30:00 EST 2012"),"endDate":new Date("Mon Dec 10 1:30:00 EST 2012"),"taskName":"Repeat Lact13","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 18:32:00 EST 2012"),"endDate":new Date("Mon Dec 10 0:32:00 EST 2012"),"taskName":"Repeat Lact14","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 21:08:00 EST 2012"),"endDate":new Date("Mon Dec 10 3:08:00 EST 2012"),"taskName":"Repeat Lact15","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 22:44:00 EST 2012"),"endDate":new Date("Mon Dec 10 4:44:00 EST 2012"),"taskName":"Repeat Lact16","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 4:16:00  EST 2012"),"endDate":new Date("Sun Dec 09 10:16:00 EST 2012"),"taskName":"Repeat Lact17","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 13:27:00 EST 2012"),"endDate":new Date("Sun Dec 09 19:27:00 EST 2012"),"taskName":"Repeat Lact18","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 2:17:00  EST 2012"),"endDate":new Date("Sun Dec 09 8:17:00 EST 2012"),"taskName":"Repeat Lact19","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 2:00:00  EST 2012"),"endDate":new Date("Sun Dec 09 8:00:00 EST 2012"),"taskName":"Repeat Lact20","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 23:57:00 EST 2012"),"endDate":new Date("Mon Dec 10 5:57:00 EST 2012"),"taskName":"Repeat Lact21","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 16:55:00 EST 2012"),"endDate":new Date("Sun Dec 09 22:55:00 EST 2012"),"taskName":"Repeat Lact22","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 19:15:00 EST 2012"),"endDate":new Date("Mon Dec 10 1:15:00 EST 2012"),"taskName":"Repeat Lact23","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 22:58:00 EST 2012"),"endDate":new Date("Mon Dec 10 4:58:00 EST 2012"),"taskName":"Repeat Lact24","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 21:42:00 EST 2012"),"endDate":new Date("Mon Dec 10 3:42:00 EST 2012"),"taskName":"Repeat Lact25","status": "KILLED"},
{"startDate":new Date("Sun Dec 09 6:41:00  EST 2012"),"endDate":new Date("Sun Dec 09 12:41:00 EST 2012"),"taskName":"Repeat Lact26","status":"KILLED"},
{"startDate":new Date("Sun Dec 09 7:06:00  EST 2012"),"endDate":new Date("Sun Dec 09 13:06:00 EST 2012"),"taskName":"Repeat Lact27","status":"KILLED"}];
var taskStatus = {
    "SUCCEEDED" : "bar",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed"
};

var taskNames = [ "Fluids1","Fluids2", "Fluids3","Fluids4","Fluids5","Fluids6","Fluids7","Fluids8","Fluids9","Fluids10","Fluids11","Fluids12","Fluids13","Fluids14","Anti Initial Lact Blood Cult1","Anti Initial Lact Blood Cult2","Anti Initial Lact Blood Cult3", "Anti Initial Lact Blood Cult4","Repeat Vol Tissue Perf1","Repeat Vol Tissue Perf2","Repeat Vol Tissue Perf3","Repeat Vol Tissue Perf4","Repeat Vol Tissue Perf5","Repeat Vol Tissue Perf6","Repeat Vol Tissue Perf7","Repeat Vol Tissue Perf8","Vassopressors Hypo1","Repeat Lact1", "Repeat Lact2","Repeat Lact3", "Repeat Lact4","Repeat Lact5","Repeat Lact6","Repeat Lact7","Repeat Lact8", "Repeat Lact9","Repeat Lact10", "Repeat Lact11", "Repeat Lact12","Repeat Lact13","Repeat Lact14","Repeat Lact15","Repeat Lact16","Repeat Lact17","Repeat Lact18","Repeat Lact18","Repeat Lact19","Repeat Lact20","Repeat Lact21","Repeat Lact22","Repeat Lact23","Repeat Lact24","Repeat Lact25","Repeat Lact26","Repeat Lact27", ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);