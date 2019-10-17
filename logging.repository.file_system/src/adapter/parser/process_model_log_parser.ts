import * as moment from 'moment';

import {LogEntry, LogLevel} from '@process-engine/logging_api_contracts';

export function parseProcessModelLog(logData: Array<string>): LogEntry {

  const isV1 = logData[0] === 'ProcessModel';
  if (isV1) {
    return parseAsV1(logData);
  }

  return undefined;
}

function parseAsV1(logData: Array<string>): LogEntry {

  const logEntry = new LogEntry();
  logEntry.timeStamp = moment(logData[1]).toDate();
  logEntry.correlationId = logData[2];
  logEntry.processModelId = logData[3];
  logEntry.processInstanceId = logData[4];
  logEntry.logLevel = LogLevel[logData[7]];
  logEntry.message = logData[8];

  return logEntry;
}
