FROM envoyproxy/envoy:v1.22.0
COPY envoy.yaml /etc/envoy/envoy.yaml
COPY ssl /etc/envoy/ssl
ENTRYPOINT [ "/usr/local/bin/envoy" ]
CMD [ "-c /etc/envoy/envoy.yaml", "-l trace", "--log-path /tmp/envoy_info.log" ]
