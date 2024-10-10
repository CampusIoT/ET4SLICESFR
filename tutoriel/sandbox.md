# Sandbox

Serveur: https://inetlab-lorawan.icube.unistra.fr

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
> loramac set deveui CAFEBABE56bed43e
> loramac set appeui CAFEBABE00000001
> loramac set appkey 3cff3fb1d65a251f1ab24b5a7b6c1c2d
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

![](images/chirpstack4-device-profile-01.png)
![](images/chirpstack4-device-profile-02.png)
![](images/chirpstack4-device-events-03.png)

![](images/chirpstack4-dashboard-01.png)
![](images/chirpstack4-gateways-01.png)
![](images/chirpstack4-gateways-02.png)

![](images/chirpstack4-device-queue-01.png)
![](images/chirpstack4-device-queue-02.png)


![](images/chirpstack4-integration-01.png)
![](images/chirpstack4-nodered-mqtt-01.png)
![](images/chirpstack4-nodered-mqtt-02.png)
![](images/chirpstack4-integration-influxdb-01.png)
![](images/chirpstack4-integration-thingsboard-01.png)
![](images/chirpstack4-integration-semtech-01.png)

npm i @crapougnax/cayennelpp

// const { LPPEncoder, LPPDecoder } = await import("@crapougnax/cayennelpp");
import { LPPEncoder,LPPDecoder } from  '@crapougnax/cayennelpp'

const encoder = new LPPEncoder()
encoder.addTemperature(1, 33.0)
encoder.addTemperature(2, -50.0)
const buffer = encoder.getPayload();
console.log('base64 =',buffer.toString('base64'),', hex =',buffer.toString('hex'));

const decoder = new LPPEncoder(buffer)
decoder.decode()
const temperature1 = decoder.getChannel(1).temperature







const decoder = new LPPEncoder(buffer)
decoder.decode()
const temperature1 = decoder.getChannel(1).temperature



https://github.com/ElectronicCats/CayenneLPP/blob/master/decoders/decoder.js