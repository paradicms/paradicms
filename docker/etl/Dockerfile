FROM python:3.12-slim

COPY ./data /paradicms/data
COPY ./lib/py/etl /paradicms/lib/py/etl

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install .

# Delete files we don't need 
RUN rm -fr /paradicms/lib/py/etl /root/.cache
