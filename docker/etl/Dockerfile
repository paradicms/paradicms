FROM python:3.12-slim

COPY ./data /paradicms/data
COPY ./lib/py/etl /paradicms/lib/py/etl

# Install zlib
RUN apt-get update && apt-get install -y zlib1g zlib1g-dev

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install .

# Delete files we don't need 
RUN rm -fr /paradicms/lib/py/etl /root/.cache
