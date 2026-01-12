import { ReactComponent as ArrowUp } from "./ArrowUp.svg";
import { ReactComponent as ArrowNE } from "./ArrowNE.svg";
import { ReactComponent as ArrowDown } from "./ArrowDown.svg";
import { ReactComponent as Bookmark } from "./Bookmark.svg";
import { ReactComponent as Burger } from "./Burger.svg";
import { ReactComponent as Calculator } from "./Calculator.svg";
import { ReactComponent as Calculator2 } from "./Calculator2.svg";
import { ReactComponent as Card } from "./Card.svg";
import { ReactComponent as Courthouse } from "./Courthouse.svg";
import { ReactComponent as Crypto } from "./Crypto.svg";
import { ReactComponent as Dog } from "./Dog.svg";
import { ReactComponent as DownloadMark } from "./DownloadMark.svg";
import { ReactComponent as Ellipse } from "./Ellipse.svg";
import { ReactComponent as Flag } from "./Flag.svg";
import { ReactComponent as Game } from "./Game.svg";
import { ReactComponent as Global } from "./Global.svg";
import { ReactComponent as HeartBit } from "./HeartBit.svg";
import { ReactComponent as KaspiBank } from "./KaspiBank.svg";
import { ReactComponent as Live } from "./Live.svg";
import { ReactComponent as MessageText } from "./MessageText.svg";
import { ReactComponent as Moneys } from "./Moneys.svg";
import { ReactComponent as Ok } from "./Ok.svg";
import { ReactComponent as OzonBank } from "./OzonBank.svg";
import { ReactComponent as PayIn } from "./PayIn.svg";
import { ReactComponent as PayOut } from "./PayOut.svg";
import { ReactComponent as ReceiveBox } from "./ReceiveBox.svg";
import { ReactComponent as Sber } from "./Sber.svg";
import { ReactComponent as SBP } from "./SBP.svg";
import { ReactComponent as SBPCounterparty } from "./SBPCounterparty.svg";
import { ReactComponent as TBank } from "./TBank.svg";
import { ReactComponent as Timer } from "./Timer.svg";
import { ReactComponent as Trend } from "./Trend.svg";
import { ReactComponent as TrustLink } from "./TrustLink.svg";
import { ReactComponent as TrustLinkSymbol } from "./TrustLinkSymbol.svg";
import { ReactComponent as UserSquare } from "./UserSquare.svg";

//Lazy
import { lazy } from "react";

export const Person1 = lazy(() =>
  import("./Person1.svg").then((m) => ({ default: m.ReactComponent }))
);
export const Person2 = lazy(() =>
  import("./Person2.svg").then((m) => ({ default: m.ReactComponent }))
);
export const Person3 = lazy(() =>
  import("./Person3.svg").then((m) => ({ default: m.ReactComponent }))
);
export const Person4 = lazy(() =>
  import("./Person4.svg").then((m) => ({ default: m.ReactComponent }))
);

export const PersonSmall1 = lazy(() =>
  import("./PersonSmall1.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall2 = lazy(() =>
  import("./PersonSmall2.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall3 = lazy(() =>
  import("./PersonSmall3.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall4 = lazy(() =>
  import("./PersonSmall4.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall5 = lazy(() =>
  import("./PersonSmall5.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall6 = lazy(() =>
  import("./PersonSmall6.svg").then((m) => ({ default: m.ReactComponent }))
);
export const PersonSmall7 = lazy(() =>
  import("./PersonSmall7.svg").then((m) => ({ default: m.ReactComponent }))
);

export const Banner = lazy(() =>
  import("./Banner.svg").then((m) => ({ default: m.ReactComponent }))
);

export {
  ArrowUp,
  ArrowNE,
  ArrowDown,
  Bookmark,
  Burger,
  Calculator,
  Calculator2,
  Card,
  Courthouse,
  Crypto,
  Dog,
  DownloadMark,
  Ellipse,
  Flag,
  Game,
  Global,
  HeartBit,
  KaspiBank,
  Live,
  MessageText,
  Moneys,
  Ok,
  OzonBank,
  PayIn,
  PayOut,
  ReceiveBox,
  SBP,
  SBPCounterparty,
  Sber,
  TBank,
  Timer,
  Trend,
  TrustLink,
  TrustLinkSymbol,
  UserSquare,
};
