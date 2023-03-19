FROM nikolaik/python-nodejs:python3.11-nodejs18-slim

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

COPY . /paradicms

RUN cd /paradicms/lib/py/etl && pip3 install -qqq .
RUN cd /paradicms/lib/py/ssg && pip3 install -qqq .
RUN cd /paradicms && yarn install && yarn build-lib

RUN cd /paradicms && rm -fr lib/py /root/.cache
