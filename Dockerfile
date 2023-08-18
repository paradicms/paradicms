FROM nikolaik/python-nodejs:python3.11-nodejs18

ENV NEXT_TELEMETRY_DISABLED 1

RUN apt-get update && apt-get install -y libpoppler-cpp-dev

COPY . /paradicms

WORKDIR /paradicms

# Move the yarn and pip caches to the right directory
RUN ls -d pip-yarn-cache >/dev/null 2>&1 && rm -fr /root/.cache && mv pip-yarn-cache /root/.cache

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install . && \
    cd /paradicms/lib/py/nlp && pip3 install . && \
    cd /paradicms/lib/py/ssg && pip3 install . &&

# Download NLTK data
RUN python -m nltk.downloader wordnet && python -m nltk.downloader omw && python -m nltk.downloader stopwords

# Install Node.js packages
RUN yarn install && yarn build-lib

# Delete files we don't need 
RUN rm -fr lib/py /root/.cache && yarn cache clean
