FROM nikolaik/python-nodejs:python3.9-nodejs14-slim

ENV NEXT_TELEMETRY_DISABLED 1

# The Docker build context is a directory where both etl and gui are checked out:
# paradicms/etl
# paradicms/gui

COPY . /paradicms

RUN cd /paradicms/etl && pip3 install -qqq .
RUN cd /paradicms/gui/loader && pip3 install -qqq . 
RUN cd /paradicms/gui && yarn install && yarn build-lib

RUN cd /paradicms && rm -fr etl gui/loader /root/.cache
