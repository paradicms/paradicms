FROM nikolaik/python-nodejs:python3.11-nodejs18

ENV NEXT_TELEMETRY_DISABLED 1

COPY . /paradicms

RUN mv /paradicms/pip-yarn-cache /root/.cache && \
    cd /paradicms/lib/py/etl && pip3 install -r requirements.txt && \
    cd /paradicms/lib/py/nlp && pip3 install -r requirements.txt && \
    cd /paradicms/lib/py/ssg && pip3 install -r requirements.txt && \
    cd /paradicms && yarn install && yarn build-lib && \
    cd /paradicms && rm -fr lib/py /root/.cache && yarn cache clean
