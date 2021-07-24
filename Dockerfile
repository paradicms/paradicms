FROM nikolaik/python-nodejs:python3.9-nodejs14-slim

COPY . /paradicms

RUN cd /paradicms/etl && pip3 install . && cd /paradicms && rm -fr etl && rm -fr /root/.cache

RUN cd /paradicms/gui && yarn install && cd lib && ./build.sh

ENV NEXT_TELEMETRY_DISABLED 1
