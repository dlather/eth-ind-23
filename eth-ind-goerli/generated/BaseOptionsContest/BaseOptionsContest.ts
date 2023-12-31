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

export class BetPlacedEvent extends ethereum.Event {
  get params(): BetPlacedEvent__Params {
    return new BetPlacedEvent__Params(this);
  }
}

export class BetPlacedEvent__Params {
  _event: BetPlacedEvent;

  constructor(event: BetPlacedEvent) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contestAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class BaseOptionsContest__getCompleteContestDataResult_completeContestDataStruct extends ethereum.Tuple {
  get winnersResolved(): boolean {
    return this[0].toBoolean();
  }

  get data(): Array<
    BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataStruct
  > {
    return this[1].toTupleArray<
      BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataStruct
    >();
  }
}

export class BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataStruct extends ethereum.Tuple {
  get winning(): BigInt {
    return this[0].toBigInt();
  }

  get betPlaced(): BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataBetPlacedStruct {
    return changetype<
      BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataBetPlacedStruct
    >(this[1].toTuple());
  }
}

export class BaseOptionsContest__getCompleteContestDataResult_completeContestDataDataBetPlacedStruct extends ethereum.Tuple {
  get betId(): Bytes {
    return this[0].toBytes();
  }

  get optionsSelected(): Array<Bytes> {
    return this[1].toBytesArray();
  }

  get userAddress(): Address {
    return this[2].toAddress();
  }

  get operatorAddress(): Address {
    return this[3].toAddress();
  }
}

export class BaseOptionsContest__getContestDataResultValue0Struct extends ethereum.Tuple {
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

export class BaseOptionsContest extends ethereum.SmartContract {
  static bind(address: Address): BaseOptionsContest {
    return new BaseOptionsContest("BaseOptionsContest", address);
  }

  areAllOptionsValid(_optionsSelected: Array<Bytes>): boolean {
    let result = super.call(
      "areAllOptionsValid",
      "areAllOptionsValid(bytes32[]):(bool)",
      [ethereum.Value.fromFixedBytesArray(_optionsSelected)]
    );

    return result[0].toBoolean();
  }

  try_areAllOptionsValid(
    _optionsSelected: Array<Bytes>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "areAllOptionsValid",
      "areAllOptionsValid(bytes32[]):(bool)",
      [ethereum.Value.fromFixedBytesArray(_optionsSelected)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  encode(_ids: Array<Bytes>): Bytes {
    let result = super.call("encode", "encode(bytes32[]):(bytes)", [
      ethereum.Value.fromFixedBytesArray(_ids)
    ]);

    return result[0].toBytes();
  }

  try_encode(_ids: Array<Bytes>): ethereum.CallResult<Bytes> {
    let result = super.tryCall("encode", "encode(bytes32[]):(bytes)", [
      ethereum.Value.fromFixedBytesArray(_ids)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getCompleteContestData(): BaseOptionsContest__getCompleteContestDataResult_completeContestDataStruct {
    let result = super.call(
      "getCompleteContestData",
      "getCompleteContestData():((bool,(uint256,(bytes32,bytes32[],address,address))[]))",
      []
    );

    return changetype<
      BaseOptionsContest__getCompleteContestDataResult_completeContestDataStruct
    >(result[0].toTuple());
  }

  try_getCompleteContestData(): ethereum.CallResult<
    BaseOptionsContest__getCompleteContestDataResult_completeContestDataStruct
  > {
    let result = super.tryCall(
      "getCompleteContestData",
      "getCompleteContestData():((bool,(uint256,(bytes32,bytes32[],address,address))[]))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<
        BaseOptionsContest__getCompleteContestDataResult_completeContestDataStruct
      >(value[0].toTuple())
    );
  }

  getContestData(): BaseOptionsContest__getContestDataResultValue0Struct {
    let result = super.call(
      "getContestData",
      "getContestData():((bytes32,address,bytes32,uint256,bytes32[],uint256,uint256,uint64))",
      []
    );

    return changetype<BaseOptionsContest__getContestDataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getContestData(): ethereum.CallResult<
    BaseOptionsContest__getContestDataResultValue0Struct
  > {
    let result = super.tryCall(
      "getContestData",
      "getContestData():((bytes32,address,bytes32,uint256,bytes32[],uint256,uint256,uint64))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<BaseOptionsContest__getContestDataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  resolveContest(): boolean {
    let result = super.call("resolveContest", "resolveContest():(bool)", []);

    return result[0].toBoolean();
  }

  try_resolveContest(): ethereum.CallResult<boolean> {
    let result = super.tryCall("resolveContest", "resolveContest():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  winnersResolved(): boolean {
    let result = super.call("winnersResolved", "winnersResolved():(bool)", []);

    return result[0].toBoolean();
  }

  try_winnersResolved(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "winnersResolved",
      "winnersResolved():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  winnings(param0: Address): BigInt {
    let result = super.call("winnings", "winnings(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_winnings(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("winnings", "winnings(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _contestData(): InitializeCall_contestDataStruct {
    return changetype<InitializeCall_contestDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get _locator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall_contestDataStruct extends ethereum.Tuple {
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

export class PlaceBetCall extends ethereum.Call {
  get inputs(): PlaceBetCall__Inputs {
    return new PlaceBetCall__Inputs(this);
  }

  get outputs(): PlaceBetCall__Outputs {
    return new PlaceBetCall__Outputs(this);
  }
}

export class PlaceBetCall__Inputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }

  get _operatorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class PlaceBetCall__Outputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get value1(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class ResolveContestCall extends ethereum.Call {
  get inputs(): ResolveContestCall__Inputs {
    return new ResolveContestCall__Inputs(this);
  }

  get outputs(): ResolveContestCall__Outputs {
    return new ResolveContestCall__Outputs(this);
  }
}

export class ResolveContestCall__Inputs {
  _call: ResolveContestCall;

  constructor(call: ResolveContestCall) {
    this._call = call;
  }
}

export class ResolveContestCall__Outputs {
  _call: ResolveContestCall;

  constructor(call: ResolveContestCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawWinningAmountCall extends ethereum.Call {
  get inputs(): WithdrawWinningAmountCall__Inputs {
    return new WithdrawWinningAmountCall__Inputs(this);
  }

  get outputs(): WithdrawWinningAmountCall__Outputs {
    return new WithdrawWinningAmountCall__Outputs(this);
  }
}

export class WithdrawWinningAmountCall__Inputs {
  _call: WithdrawWinningAmountCall;

  constructor(call: WithdrawWinningAmountCall) {
    this._call = call;
  }
}

export class WithdrawWinningAmountCall__Outputs {
  _call: WithdrawWinningAmountCall;

  constructor(call: WithdrawWinningAmountCall) {
    this._call = call;
  }
}
