const fs = require("fs").promises;
const LogRecord_1 = require("../LogRecord/LogRecord");
const IBFRecordReader = require("../IBFRecord/IBFRecordReader");
const LogRecordParser = require("../LogRecord/LogRecordParser");

async function inspectFile(result, cb = () => {}) {
  if (typeof result !== "string") {
    console.error(result);
  } else {
    let buffer = await fs.readFile(result);
    let record;
    // TODO: add support for the file headers and profile entries -- skip them until then
    let recordCount = -18;
    while (true) {
      [record, buffer] = IBFRecordReader.readIBFRecord(buffer);
      if (record == null || buffer.length == 0) {
        break;
      }
      recordCount++;
      if (recordCount >= 0) {
        let [err, parsed] = LogRecordParser.parseLogRecord(record);
        if (err) {
          // console.log(err);
        } else {
          let recordType;
          if (typeof parsed["historyLogRecordType"] !== 'undefined') {
            recordType = LogRecord_1.HistoryLogRecordType[parsed["historyLogRecordType"]];
          } else {
            recordType = LogRecord_1.LogRecordType[parsed.logType];
          }
          await cb({ recordType, record: parsed })
          //  console.log(recordCount + ": " + recordType + JSON.stringify(parsed));
        }
      }
    }
  }
}
module.exports = inspectFile;
