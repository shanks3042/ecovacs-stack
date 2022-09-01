# Ecovacs Stack

All this as only be tested on my T9 Aivi.

## Topics

### Vacuum bot subscribe to

```typescript
iot/p2p/+/+/+/+/${bot_id}/${bot_class}/${bot_resource}/+/+/+
```

to listen request

```typescript
iot/cfg/${bot_id}/${bot_class}/${bot_resource}/+/+
```

to... ?

```typescript
iot/dtcfg/${bot_id}/${bot_class}/${bot_resource}/+/+
```

to... ?

```typescript
iot/dtgcfg/${bot_id}/${bot_class}/${bot_resource}/+/+
```

to... ?

### Vacuum bot will send messages to

```typescript
iot/p2p/${command}/${bot_id}/${bot_class}/${bot_resource}/${requester_name}/${env /*'ecosys'*/)/${4_char_id} /*'1234'*//p /*for resPonse*//${request_id}/${j /* for Json */}
```

to answer to requests.

```typescript
iot/atr/${command}/${bot_id}/${bot_class}/${bot_resource}/${request_id}/${j /* for Json */}
```

to send status update.

## Commands

(almost) All response will contain an object looking like:

```typescript
{ code: int (0,),
  msg: string ('ok',),
  data?: any,
}
```

| Command name         | Payload                                                                                                                                                               | utility                                                                   | response data                                                                                                                                                                                                                                                          | Comment                                                                                                                                            |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 'playSound'          | `{ sid: int }`                                                                                                                                                        | play a sound.                                                             | na                                                                                                                                                                                                                                                                     | _T9 seems to always return the same sounds dependinf of his current state_                                                                         |
| 'getWKVer'           | na                                                                                                                                                                    | return a version number.                                                  | `{"ret": string ('ok' todo),"ver": string}`                                                                                                                                                                                                                            | _"ver":"0.25.16", doens't seems to be the firmware or app version number, the response doesn't contain the classic `code` `msg` `data` properties_ |
| 'getBattery'         | na                                                                                                                                                                    | return the battery level and a `isLow` boolean.                           | `{"value":int,"isLow":int boolean}`                                                                                                                                                                                                                                    | _the `isLow` boolean is an int `0` or `1`_                                                                                                         |
| 'getCleanInfo'       | na                                                                                                                                                                    | return a `trigger` value and the `state`.                                 | `{"trigger": string ('workComplete', todo),"state":string ('idle , todo)}`                                                                                                                                                                                             | na                                                                                                                                                 |
| 'getChargeState'     | na                                                                                                                                                                    | return the charge state.                                                  | `{"isCharging":int boolean,"mode":string ('slot', todo)}}`                                                                                                                                                                                                             | na                                                                                                                                                 |
| 'getWaterInfo'       | `{"id": int (length 8)}`                                                                                                                                              | return info relative to the sweep module (Ozmo)                           | `{"enable": int boolean,"amount": int (3, todo),"type": int (0, todo),"sweepType": int (2,todo)}`                                                                                                                                                                      | _`amount` is the water flow level, `sweepType` is the mopping_preference_                                                                          |
| 'getSleep'           | `{"id": int (length 8)}`                                                                                                                                              | return `0` or `1` if the bot is on standby.                               | `{"enable":int boolean}`                                                                                                                                                                                                                                               | na                                                                                                                                                 |
| 'getAdvancedMode'    | `{"id": int (length 8)}`                                                                                                                                              | return `0` or `1`.                                                        | `{"enable":int boolean}`                                                                                                                                                                                                                                               | _Not sure yet what is the 'advanced mode'._                                                                                                        |
| 'getVolume'          | `{"id": int (length 8)}`                                                                                                                                              | return the volume total and current value                                 | `{"total":int,"volume": int}`                                                                                                                                                                                                                                          | na                                                                                                                                                 |
| 'clean_V2'           | `{"act": string ('start', 'pause', ),"content":{"total":int (0,),"donotClean":int (0,),"count": int (0,),"type": string ('auto', )},"bdTaskID": string (length 16)}}` | start or pause the cleaning process                                       | na                                                                                                                                                                                                                                                                     | _how it's define `total`, `donotClean`, or `count`? What's the utility of `bdTaskID`? For logs and stats maybe._                                   |
| 'getStats'           | na                                                                                                                                                                    | ??                                                                        | `{"area": int (25,),"time": int (length 4),"cid": int (lenght 9),"start": int (timestamp),"type": string ('customArea',),"enablePowerMop": boolean in,"powerMopType": int (2),"aiopen": int (boolean int ? 1),"aitypes": int[] ([5,3,6,4,9]) ,"avoidCount": int (24)}` | _need more info for this one_                                                                                                                      |
| 'appping'            | na                                                                                                                                                                    | no idea                                                                   | na                                                                                                                                                                                                                                                                     | na                                                                                                                                                 |
| 'charge'             | na                                                                                                                                                                    | send to charge dock                                                       | na                                                                                                                                                                                                                                                                     | na                                                                                                                                                 |
| 'setRelocationState' | `{"mode": string ('manu', )),"bdTaskID": string (length 16)}`                                                                                                         | ask to relocate the bot                                                   | na                                                                                                                                                                                                                                                                     | _answer when the command as been receive not when the relocation is done with success or not_                                                      |
| 'getAudioCallState'  |
| 'getMapSet'          |
| 'getMajorMap'        |
| 'getMapSubSet'       |
| 'getMinorMap'        |
| 'getMapTrace'        |
| 'getCleanInfo_V2'    |
| 'getMapInfo_V2'      |
| 'shell'              | `{"script": string (b64 encoded shell script)`                                                                                                                        | to send bash script encoded in B64 who will be executed by the Vacuum bot | na                                                                                                                                                                                                                                                                     | _Vacuum bot execute the script without any verification, user seem to be `root`, WTF!_                                                             |

# Thanks to

https://github.com/mrbungle64/ecovacs-deebot.js  
https://github.com/And3rsL/Deebot-for-Home-Assistant  
https://deebot.readthedocs.io/  
https://github.com/bmartin5692/bumper  
https://github.com/kushagharahi/ecovacs-privacy-control
