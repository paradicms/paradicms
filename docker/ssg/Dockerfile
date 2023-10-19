FROM nikolaik/python-nodejs:python3.10-nodejs18

ENV NEXT_TELEMETRY_DISABLED 1

COPY . /paradicms

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install . && \
    cd /paradicms/lib/py/ssg && pip3 install .

# Install Node.js packages
RUN cd /paradicms && yarn install && yarn build-lib

# Delete files we don't need 
RUN rm -fr /paradicms/lib/py /root/.cache && yarn cache clean
