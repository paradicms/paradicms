FROM nikolaik/python-nodejs:python3.9-nodejs14-slim

ENV NEXT_TELEMETRY_DISABLED 1

COPY . /paradicms

RUN cd /paradicms/etl && pip3 install . && cd /paradicms && rm -fr etl && rm -fr /root/.cache

RUN cd /paradicms/gui && yarn install && yarn build
