FROM nikolaik/python-nodejs:python3.9-nodejs14-slim

ENV NEXT_TELEMETRY_DISABLED 1

COPY . /paradicms

RUN cd /paradicms/etl && pip3 install -qqq .
RUN cd /paradicms/ssg && pip3 install -qqq .
RUN cd /paradicms && yarn install && yarn build-lib

RUN cd /paradicms && rm -fr etl ssg /root/.cache
