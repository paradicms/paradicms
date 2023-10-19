FROM python:3.10-slim

COPY ./lib/py/etl /paradicms/lib/py/etl

# Install Python packages
RUN cd /paradicms/lib/py/etl && pip3 install

# Delete files we don't need 
RUN rm -fr /paradicms /root/.cache
