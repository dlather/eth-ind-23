// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ContestAdded extends ethereum.Event {
  get params(): ContestAdded__Params {
    return new ContestAdded__Params(this);
  }
}

export class ContestAdded__Params {
  _event: ContestAdded;

  constructor(event: ContestAdded) {
    this._event = event;
  }

  get dataId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get contestAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get contestId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class YesNoContestFactory__addContestResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }

  getValue0(): boolean {
    return this.value0;
  }

  getValue1(): Bytes {
    return this.value1;
  }
}

export class YesNoContestFactory__getAllContestsDetailsResult_essentialContestDataStruct extends ethereum.Tuple {
  get contestAddress(): Address {
    return this[0].toAddress();
  }

  get dataId(): Bytes {
    return this[1].toBytes();
  }
}

export class YesNoContestFactory__getContestsByDataIdResult_contestsStruct extends ethereum.Tuple {
  get dataId(): Bytes {
    return this[0].toBytes();
  }

  get contestAddress(): Address {
    return this[1].toAddress();
  }

  get id(): Bytes {
    return this[2].toBytes();
  }

  get count(): BigInt {
    return this[3].toBigInt();
  }

  get validIds(): Array<Bytes> {
    return this[4].toBytesArray();
  }

  get fee(): BigInt {
    return this[5].toBigInt();
  }

  get spots(): BigInt {
    return this[6].toBigInt();
  }

  get stopTimeStamp(): BigInt {
    return this[7].toBigInt();
  }
}

export class YesNoContestFactory extends ethereum.SmartContract {
  static bind(address: Address): YesNoContestFactory {
    return new YesNoContestFactory("YesNoContestFactory", address);
  }

  addContest(
    _dataId: Bytes,
    _data: Bytes
  ): YesNoContestFactory__addContestResult {
    let result = super.call(
      "addContest",
      "addContest(bytes32,bytes):(bool,bytes32)",
      [ethereum.Value.fromFixedBytes(_dataId), ethereum.Value.fromBytes(_data)]
    );

    return new YesNoContestFactory__addContestResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_addContest(
    _dataId: Bytes,
    _data: Bytes
  ): ethereum.CallResult<YesNoContestFactory__addContestResult> {
    let result = super.tryCall(
      "addContest",
      "addContest(bytes32,bytes):(bool,bytes32)",
      [ethereum.Value.fromFixedBytes(_dataId), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new YesNoContestFactory__addContestResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  encode(_fee: BigInt, _spots: BigInt, _stopTimeStamp: BigInt): Bytes {
    let result = super.call(
      "encode",
      "encode(uint256,uint256,uint64):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(_fee),
        ethereum.Value.fromUnsignedBigInt(_spots),
        ethereum.Value.fromUnsignedBigInt(_stopTimeStamp)
      ]
    );

    return result[0].toBytes();
  }

  try_encode(
    _fee: BigInt,
    _spots: BigInt,
    _stopTimeStamp: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "encode",
      "encode(uint256,uint256,uint64):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(_fee),
        ethereum.Value.fromUnsignedBigInt(_spots),
        ethereum.Value.fromUnsignedBigInt(_stopTimeStamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAllContestsDetails(
    _contestIds: Array<Bytes>
  ): Array<
    YesNoContestFactory__getAllContestsDetailsResult_essentialContestDataStruct
  > {
    let result = super.call(
      "getAllContestsDetails",
      "getAllContestsDetails(bytes32[]):((address,bytes32)[])",
      [ethereum.Value.fromFixedBytesArray(_contestIds)]
    );

    return result[0].toTupleArray<
      YesNoContestFactory__getAllContestsDetailsResult_essentialContestDataStruct
    >();
  }

  try_getAllContestsDetails(
    _contestIds: Array<Bytes>
  ): ethereum.CallResult<
    Array<
      YesNoContestFactory__getAllContestsDetailsResult_essentialContestDataStruct
    >
  > {
    let result = super.tryCall(
      "getAllContestsDetails",
      "getAllContestsDetails(bytes32[]):((address,bytes32)[])",
      [ethereum.Value.fromFixedBytesArray(_contestIds)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        YesNoContestFactory__getAllContestsDetailsResult_essentialContestDataStruct
      >()
    );
  }

  getContestAddress(_contestId: Bytes): Address {
    let result = super.call(
      "getContestAddress",
      "getContestAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_contestId)]
    );

    return result[0].toAddress();
  }

  try_getContestAddress(_contestId: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getContestAddress",
      "getContestAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(_contestId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getContestsByDataId(
    _dataId: Bytes
  ): Array<YesNoContestFactory__getContestsByDataIdResult_contestsStruct> {
    let result = super.call(
      "getContestsByDataId",
      "getContestsByDataId(bytes32):((bytes32,address,bytes32,uint256,bytes32[],uint256,uint256,uint64)[])",
      [ethereum.Value.fromFixedBytes(_dataId)]
    );

    return result[0].toTupleArray<
      YesNoContestFactory__getContestsByDataIdResult_contestsStruct
    >();
  }

  try_getContestsByDataId(
    _dataId: Bytes
  ): ethereum.CallResult<
    Array<YesNoContestFactory__getContestsByDataIdResult_contestsStruct>
  > {
    let result = super.tryCall(
      "getContestsByDataId",
      "getContestsByDataId(bytes32):((bytes32,address,bytes32,uint256,bytes32[],uint256,uint256,uint64)[])",
      [ethereum.Value.fromFixedBytes(_dataId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        YesNoContestFactory__getContestsByDataIdResult_contestsStruct
      >()
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _locator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _baseOptionsContestImplementation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddContestCall extends ethereum.Call {
  get inputs(): AddContestCall__Inputs {
    return new AddContestCall__Inputs(this);
  }

  get outputs(): AddContestCall__Outputs {
    return new AddContestCall__Outputs(this);
  }
}

export class AddContestCall__Inputs {
  _call: AddContestCall;

  constructor(call: AddContestCall) {
    this._call = call;
  }

  get _dataId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AddContestCall__Outputs {
  _call: AddContestCall;

  constructor(call: AddContestCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get value1(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}
