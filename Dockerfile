FROM nikolaik/python-nodejs:python3.11-nodejs18

ENV NEXT_TELEMETRY_DISABLED 1

COPY . /paradicms

RUN ls -d /paradicms/pip-yarn-cache >/dev/null 2>&1 && rm -fr /root/.cache && mv /paradicms/pip-yarn-cache /root/.cache && \
    cd /paradicms/lib/py/etl && pip3 install . && \
    cd /paradicms/lib/py/nlp && pip3 install . && \
    cd /paradicms/lib/py/ssg && pip3 install . && \
    cd /paradicms && yarn install && yarn build-lib && \
    cd /paradicms && rm -fr lib/py /root/.cache && yarn cache clean
