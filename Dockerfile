FROM nikolaik/python-nodejs:python3.9-nodejs14-slim

COPY . /paradicms

RUN cd /paradicms/etl && pip3 install . && cd /paradicms && rm -fr etl && rm -fr /root/.cache

RUN cd /paradicms/gui && yarn install && yarn build

ENV NEXT_TELEMETRY_DISABLED 1
