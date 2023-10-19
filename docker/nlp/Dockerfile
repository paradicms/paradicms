FROM python:3.10-slim

RUN apt-get update && apt-get install -y libpoppler-cpp-dev

COPY ./lib/py/etl /paradicms/lib/py/etl
COPY ./lib/py/nlp /paradicms/lib/py/nlp

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install . && \
    cd /paradicms/lib/py/ssg && pip3 install .

# Download NLTK data
RUN python -m nltk.downloader wordnet && python -m nltk.downloader omw && python -m nltk.downloader stopwords

# Delete files we don't need 
RUN rm -fr /paradicms/lib/py /root/.cache
