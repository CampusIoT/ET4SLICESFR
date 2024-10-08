# Sandbox

```bash
> DevEUI=`echo "CAFEBABE$(openssl rand -hex 4)"`
> echo $DevEUI
CAFEBABE56bed43e
> AppEUI=CAFEBABE00000001
> AppKey=`openssl rand -hex 16`
> echo $AppKey
3cff3fb1d65a251f1ab24b5a7b6c1c2d
```


```
help
Command              Description
---------------------------------------
loramac              Control Semtech loramac stack
loramac_txhex        Send hextring message
pm                   interact with layered PM subsystem
reboot               Reboot the node
version              Prints current RIOT_VERSION
> loramac
Usage: loramac <get|set|join|tx|link_check|save|erase>
> loramac set appeui CAFEBABE00000001
> loramac set appkey CAFEBABE56bed43e
Usage: loramac set appkey <32 hex chars>
> loramac set appkey 3cff3fb1d65a251f1ab24b5a7b6c1c2d
> loramac set deveui 3cff3fb1d65a251f1ab24b5a7b6c1c2d
Usage: loramac set deveui <16 hex chars>
> loramac set deveui CAFEBABE56bed43e
> loramac
Usage: loramac <get|set|join|tx|link_check|save|erase>
> loramac save
> loramac link_check
Link check request scheduled
> loramac set adr true
Usage: loramac set adr <on|off>
> loramac set adr on
> loramac set dr 5
> loramac join otaa
Join procedure succeeded!
> loramac tx          
Usage: loramac tx <payload> [<cnf|uncnf>] [port]
> loramac tx HELLO cnf 10
Received ACK from network
Message sent with success
> loramac link_check
Link check request scheduled
> loramac tx HELLO cnf 11
Link check information:
  - Demodulation margin: 21
  - Number of gateways: 1
Received ACK from network
Message sent with success
> loramac get dr
DATARATE: 5
> loramac set dr 0
> loramac link_check
Link check request scheduled
> loramac tx HELLO cnf 12
Link check information:
  - Demodulation margin: 28
  - Number of gateways: 1
Received ACK from network
Message sent with success
> loramac get dr
DATARATE: 5
> loramac tx HELLO cnf 13
Received ACK from network
Message sent with success
> loramac tx HELLO uncnf 14
Message sent with success
> loramac get devaddr
DEVADDR: 0258AC9C
> loramac get nwkskey
NWKSKEY: FFA0E2B245FD230032FECCA7A6815C53
> loramac get appskey
APPSKEY: 5277956D2B73034BB04F31727F7CE1A1
> loramac get ul_cnt
Uplink Counter: 5
```

![](images/chirpstack4-device-frames-01.png)
![](images/chirpstack4-device-events-01.png)
![](images/chirpstack4-device-events-02.png)
![](images/chirpstack4-device-activation-01.png)
![](images/chirpstack4-device-dashboard-01.png)
