#!/usr/bin/yarn dev
import { createQueue } from 'kue';

const queue = createQueue();

const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notfication to ${phoneNumber},`,
    'with message:',
    message,
  );
};

queue.process('push_notificiation_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
