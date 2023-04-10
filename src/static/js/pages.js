$(function () {
  main()
});

const main = async () => {

  let tableData = {
    "title": "Front Page",
    "heading": ["Pool Provider", "LP", "Reward Tokens", "INFO"],
    "rows": [
      ["1inch                        ", `<a href="1inch/"             >Various</a>`, "1INCH              ", "https://1inch.exchange/#/dao/farming"],
      ["Alpha DEX                    ", `<a href="alphadex/"          >Various</a>`, "DEX                ", "https://kitten.finance"],
      ["Alphr.Finance                ", `<a href="alphr/"             >Various</a>`, "ALPHR              ", "https://alphr.finance"],
      ["Armor                        ", `<a href="armor/"             >Various</a>`, "ARMOR              ", "https://armor.fi"],
      ["Arth                         ", `<a href="arth/"              >Various</a>`, "ARTH/MAHA          ", "https://mahadao.com/arth"],
      ["Basis                        ", `<a href="basis/"             >Various</a>`, "BAS,BAC            ", "https://basis.cash"],
      ["Basis Gold                   ", `<a href="bsg"                >Various</a>`, "BSGS               ", "https://basis.gold"],
      ["BIOPset                      ", `<a href="biopset"            >BIOP-ETH</a>`, "BIOP              ", "https://biopset.com"],
      ["Daiq                         ", `<a href="daiq"               >Various</a>`, "DAIQ               ", "https://daiq.io"],
      ["Debase                       ", `<a href="debase"             >Various</a>`, "DEBASE             ", "https://debaseonomics.io"],
      ["Dopex                        ", `<a href="dopex"              >Various</a>`, "DPX, rDPX          ", "https://app.dopex.io/farms"],
      ["Dynamic Set Dollar           ", `<a href="dsd/"               >Various</a>`, "DSD                ", "https://dsd.finance/app"],
      ["Empty Set Dollar             ", `<a href="esd/"               >Various</a>`, "ESD                ", "https://app.emptyset.finance"],
      ["Frax Finance                 ", `<a href="frax/"              >Various</a>`, "FXS                ", "https://app.frax.finance"],
      ["Gamestop                     ", `<a href="gme"                >Various</a>`, "GME                ", "https://gamestop.finance"],
      ["Harvest Finance              ", `<a href="harvest-finance/"   >Various</a>`, "FARM               ", "https://harvest.finance"],
      ["Ichi                         ", `<a href="ichi/"              >Various</a>`, "Ichi               ", "https://ichi.farm"],
      ["Indexed                      ", `<a href="indexed"            >Various</a>`, "NDX                ", "https://indexed.finance"],
      ["MITH Cash                    ", `<a href="mithcash/"          >Various</a>`, "MIS,MIC            ", "https://mith.cash"],
      ["Morph                        ", `<a href="morph"              >Various</a>`, "MORT               ", "https://morph.finance"],
      ["Mushrooms                    ", `<a href="mushrooms"          >Various</a>`, "MM                 ", "https://mushrooms.finance"],
      ["Narwhale                     ", `<a href="narwhale"           >Various</a>`, "NAWA               ", "https://narwhale.finance"],
      ["Onecash                      ", `<a href="onecash"            >Various</a>`, "ONS                ", "https://onecash.finance"],
      ["Pegs                         ", `<a href="pegs"               >Various</a>`, "PEGS               ", "https://pegs.cash"],
      ["Percent                      ", `<a href="percent"            >Various</a>`, "PCT                ", "https://percent.finance"],
      ["Pickle                       ", `<a href="pickle/"            >Various</a>`, "Pickle             ", "https://pickle.finance"],
      ["Polka                        ", `<a href="polka"              >Various</a>`, "POS                ", "https://polkacash.finance"],
      ["PowerIndex                   ", `<a href="powerindex/"        >Various</a>`, "CVP                ", "https://powerindex.io"],
      ["Quantum Set Dollar           ", `<a href="qsd"                >Various</a>`, "QSD                ", "https://quantumset.finance"],
      ["Stabilize                    ", `<a href="stabilize/"         >Various</a>`, "STBZ               ", "https://stabilize.finance"],
      ["StakeDAO                     ", `<a href="stakedao/"          >Various</a>`, "SDT                ", "https://stakedao.org"],
      ["TrueFi                       ", `<a href="truefi/"            >Various</a>`, "TRU                ", "https://app.truefi.io/farm"],
      ["Updown                       ", `<a href="updown"             >Various</a>`, "UPDOWN             ", "https://updown.finance"],
      ["Vtd                          ", `<a href="vtd"                >Various</a>`, "VTD                ", "https://vtd.finance/app"],
      ["Xusd                         ", `<a href="xusd"               >Various</a>`, "XUSD               ", "https://xusd.money"],
      ["Yam                          ", `<a href="yam/"               >YAM-ETH SLP</a>`, "YAM                ", "https://yam.finance/farm"],
      ["yAxis                        ", `<a href="yaxis/"             >Various</a>`, "yAxis              ", "https://yaxis.io/farms"],
      ["YflUsd                       ", `<a href="yflusd"             >Various</a>`, "YFLUSD             ", "https://yflusd.linkswap.app"],
      ["Sharedstake                  ", `<a href="sgt"                >Various</a>`, "SGT                ", "https://www.sharedstake.org/earn"],
      ["Launchpool                   ", `<a href="lpool/"             >Various</a>`, "LPOOL              ", "https://staking.launchpool.xyz/"],
      ["Wolf Of Wallstreet           ", `<a href="wows"               >Various</a>`, "WOWS               ", "https://app.wolvesofwallstreet.finance"],
      ["Strudel                      ", `<a href="strudel"            >Various</a>`, "TRDL               ", "https://strudel.finance"],
      ["Sushiswap                    ", `<a href="sushi/"             >Various</a>`, "SUSHI              ", "https://app.sushi.com/farms"],
      ["xSigma                       ", `<a href="xsigma/"            >Various</a>`, "SIG                ", "https://app.xsigma.fi/stake"],
      ["Alchemix                     ", `<a href="alcx/"              >Various</a>`, "ALCX               ", "https://app.alchemix.fi/farms"],
      ["DFX                          ", `<a href="dfx/"               >Various</a>`, "DFX                ", "https://app.dfx.finance"],
      ["xToken                       ", `<a href="xtoken/"            >Various</a>`, "XTK                ", "https://xtoken.cafe/app/dashboard"],
      ["Ethic                        ", `<a href="ethic"              >Various</a>`, "ETHC               ", "https://ethic.money"],
      ["Ruler Protocol               ", `<a href="ruler/"             >Various</a>`, "RULER              ", "https://app.rulerprotocol.com/app/farms"],
      ["Sandbox                      ", `<a href="sandbox"            >Various</a>`, "SAND               ", "https://staking.sandbox.game"],
      ["Inverse                      ", `<a href="inverse"            >Various</a>`, "INV                ", "https://inverse.finance"],
      ["Badger                       ", `<a href="badger/"            >Various</a>`, "BADGER             ", "https://app.badger.finance"],
      ["Big Data Protocol            ", `<a href="bdp/"               >Various</a>`, "BDP/bALPHA/bBETA   ", "https://www.bigdataprotocol.com/datavault"],
      ["Unslashed                    ", `<a href="usf/"               >Various</a>`, "USF                ", "https://app.unslashed.finance/"],
      ["Siren                        ", `<a href="siren/"             >Various</a>`, "SI                 ", "https://sirenmarkets.com/"],
      ["Float                        ", `<a href="float/"             >Various</a>`, "BANK               ", "https://floatprotocol.com/#/stake"],
      ["Sakeswap                     ", `<a href="sakeswap"           >Various</a>`, "SAKE               ", "https://sakeswap.finance"],
      ["Defiville                    ", `<a href="defiville"          >Various</a>`, "ISLA               ", "https://defiville.finance"],
      ["Benchmark                    ", `<a href="benchmark/"         >Various</a>`, "MARK               ", "https://launchpad.benchmarkprotocol.finance/pools"],
      ["Governor                     ", `<a href="governordao"        >Various</a>`, "GDAO               ", "https://governordao.org"],
      ["Optionroom                   ", `<a href="optionroom"         >Various</a>`, "COURT              ", "https://app.optionroom.finance"],
      ["Mint                         ", `<a href="mint"               >Various</a>`, "MINT               ", "https://stake.publicmint.com"],
      ["Proof Of Humanity            ", `<a href="proofofhumanity"    >Various</a>`, "UBI                ", "https://www.proofofhumanity.id"],
      ["Bao                          ", `<a href="bao"                >Various</a>`, "BAO                ", "https://www.bao.finance"],
      ["Force DAO                    ", `<a href="forcedao/"          >Various</a>`, "FORCE              ", "https://forcedao.com"],
      ["Valueset                     ", `<a href="vsd"                >Various</a>`, "VSD                ", "https://valueset.finance"],
      ["Bella Protocol               ", `<a href="bella/"             >Various</a>`, "BEL                ", "https://bella.fi"],
      ["B26                          ", `<a href="b26"                >Various</a>`, "B26                ", "https://b26.finance"],
      ["Gaia                         ", `<a href="gaia"               >Various</a>`, "GAIA               ", "https://www.dollarprotocol.com/#/stake"],
      ["Ludus                        ", `<a href="ludus"              >Various</a>`, "LUDUS              ", "https://app.playludus.io"],
      ["Cover Protocol               ", `<a href="cover/"             >Various</a>`, "Various            ", "https://app.coverprotocol.com"],
      ["Olympus                      ", `<a href="ohm"                >Various</a>`, "OHM                ", "https://olympusdao.eth.link"],
      ["Wasabix                      ", `<a href="wasabix"            >Various</a>`, "WASABI             ", "https://wasabix.finance/#/app/pool"],
      ["Aluna                        ", `<a href="aluna"              >Various</a>`, "ALN                ", "https://aluna.social/farm"],
      ["Kine                         ", `<a href="kine"               >Various</a>`, "KINE               ", "https://kine.finance"],
      ["Visor                        ", `<a href="visor"              >Various</a>`, "VISR               ", "https://visor.finance"],
      ["Umbria                       ", `<a href="umbria"             >Various</a>`, "UMBR               ", "https://farm.umbria.network"],
      ["Basket DAO                   ", `<a href="basketdao"          >Various</a>`, "BASK               ", "https://basketdao.org"],
      ["Ethernity                    ", `<a href="ern"                >Various</a>`, "ERN                ", "https://ethernity.io"],
      ["Nft20                        ", `<a href="nft20"              >Various</a>`, "MUSE               ", "https://nft20.io"],
      ["Popsicle                     ", `<a href="popsicle"           >Various</a>`, "ICE                ", "https://popsicle.finance"],
      ["Klondike                     ", `<a href="klonx"              >Various</a>`, "KLON/KBTC          ", "https://klondike.finance"],
      ["Keep                         ", `<a href="keep"               >Various</a>`, "KEEP               ", "https://dashboard.keep.network/liquidity"],
      ["Cvi                          ", `<a href="cvi"                >Various</a>`, "GOVI               ", "https://cvi.finance"],
      ["Futureswap                   ", `<a href="futureswap"         >Various</a>`, "FST                ", "https://exchange.futureswap.com"],
      ["Xdefi                        ", `<a href="xdefi"              >Various</a>`, "XDEX               ", "https://farm.xdefi.com"],
      ["Swarm Network                ", `<a href="swarm"              >Various</a>`, "SWM                ", "https://stake.myswarm.app"],
      ["Liquity                      ", `<a href="liquity"            >Various</a>`, "LQTY               ", "https://liquity.app"],
      ["Bondappetit                  ", `<a href="bondappetit"        >Various</a>`, "BAG                ", "https://bondappetit.io"],
      ["Penguin                      ", `<a href="penguin"            >Various</a>`, "FISH               ", "https://penguinswap.eth.link"],
      ["Mimo                         ", `<a href="mimo"               >Various</a>`, "MIMO               ", "https://mimo.capital/mining"],
      ["Fei                          ", `<a href="fei"                >Various</a>`, "FEI                ", "https://fei.money"],
      ["Blockchain Adventurers Guild ", `<a href="bag"                >Various</a>`, "BAG                ", "https://app.thisistheway.finance/#/stake"],
      ["Piedao                       ", `<a href="piedao"             >Various</a>`, "DOUGH              ", "https://www.piedao.org"],
      ["Cryptex                      ", `<a href="cryptex"            >Various</a>`, "CTX                ", "https://app.cryptex.finance"],
      ["Unicrypt                     ", `<a href="unicrypt"           >Various</a>`, "Various            ", "https://farm.unicrypt.network"],
      ["Alchemydao                   ", `<a href="alchemydao"         >Various</a>`, "ALCH               ", "https://alchemydao.com"],
      ["Centaur                      ", `<a href="centaur"            >Various</a>`, "WHEY               ", "https://cntr.finance"],
      ["EPNS                         ", `<a href="epns"               >Various</a>`, "PUSH               ", "https://incentives.epns.io"],
      ["Tornado                      ", `<a href="tornado"            >Various</a>`, "TORN               ", "https://tornado.cash"],
      ["Cyclone                      ", `<a href="cyclone"            >Various</a>`, "CYC                ", "https://cyclone.xyz/eth"],
      ["Elena                        ", `<a href="elena"              >Various</a>`, "ELENA              ", "https://app.elena.finance"],
      ["Dogen                        ", `<a href="dogen"              >Various</a>`, "DOGEN              ", "https://dogen.finance"],
      ["Aave                         ", `<a href="aave"               >Various</a>`, "stkAAVE            ", "https://aave.com"],
      ["Mochi                        ", `<a href="moma"               >Various</a>`, "MOMA               ", "https://mochi.market"],
      ["Synthetix                    ", `<a href="snx"                >Various</a>`, "SNX                ", "https://staking.synthetix.io"],
      ["Lift kitchen                 ", `<a href="liftkitchen"        >Various</a>`, "LIFT               ", "https://app.lift.kitchen"],
      ["CompliFi                     ", `<a href="complifi"           >Various</a>`, "COMFI              ", "https://app.compli.fi"],
      ["Smoothy                      ", `<a href="smoothy"            >Various</a>`, "SMTY               ", "https://smoothy.finance"],
      ["Kineko                       ", `<a href="kineko"             >Various</a>`, "KKO                ", "https://stake.kineko.io"],
      ["Oiler                        ", `<a href="oiler"              >Various</a>`, "OIL                ", "https://staking.oiler.network"],
      ["Swipe                        ", `<a href="swipe"              >Various</a>`, "SXP                ", "https://swipe.org"],
      ["Convex                       ", `<a href="convex"             >Various</a>`, "Various            ", "https://www.convexfinance.com"],
      ["Unicly                       ", `<a href="unicly"             >Various</a>`, "UNIC               ", "https://www.app.unic.ly/#/farm"],
      ["Lever                        ", `<a href="lever"              >Various</a>`, "LEV                ", "https://lever.network"],
      ["Fuse                         ", `<a href="fuse_eth"           >Various</a>`, "FUSE               ", "https://fuse.io"],
      ["Donkey                       ", `<a href="donkey"             >Various</a>`, "DON                ", "https://don-key.finance"],
      ["Wild Credit                  ", `<a href="wild"               >Various</a>`, "WILD               ", "https://wild.credit"],
      ["Convergence                  ", `<a href="convx"              >Various</a>`, "CONV               ", "https://convx.conv.finance"],
      ["Abracadabra                  ", `<a href="abracadabra"        >Various</a>`, "SPELL              ", "https://abracadabra.money"],
      ["Universe                     ", `<a href="universe"           >Various</a>`, "XYZ                ", "https://dao.universe.xyz/yield-farming"],
      ["Insta Dapp                   ", `<a href="insta"              >Various</a>`, "INST               ", "https://defi.instadapp.io"],
      ["Pendle                       ", `<a href="pendle"             >Various</a>`, "PENDLE             ", "https://app.pendle.finance"],
      ["Kyber                        ", `<a href="kyber"              >Various</a>`, "KNC                ", "https://dmm.exchange"],
      ["Shiba Swap                   ", `<a href="shibaswap"          >Various</a>`, "BONE               ", "https://shibaswap.com"],
      ["BambooDeFi                   ", `<a href="bamboodefi"         >Various</a>`, "BAMBOO             ", "https://www.bamboodefi.com"],
      ["Emi Swap`                    ", `<a href="emiswap"            >Various</a>`, "ESW                ", "https://emiswap.com"],
      ["WePiggy                      ", `<a href="wepiggy/"           >Various</a>`, "WPC                ", "https://app.wepiggy.com"],
      ["Saddle                       ", `<a href="saddle/"            >Various</a>`, "Various            ", "https://saddle.exchange"],
      ["Composable                   ", `<a href="composable/"        >Various</a>`, "Composable         ", "https://app.composable.finance"],
      ["MCN Ventures                 ", `<a href="mcn/"               >Various</a>`, "MCN                ", "https://farm.mcn.ventures"],
      ["Fox Shapeshift               ", `<a href="fox/"               >Various</a>`, "FOX                ", "https://fox.shapeshift.com"],
      ["Yield Enhancement Labs       ", `<a href="yel/"               >Various</a>`, "YEL                ", "https://yel.finance"],
      ["Emptyset Finance             ", `<a href="emptyset/"          >Various</a>`, "ESS                ", "https://app.emptyset.finance/dollar"],
      ["NAOS Finance                 ", `<a href="naos/"              >Various</a>`, "NAOS               ", "https://app.naos.finance/farms"],
      ["XBE Finance                  ", `<a href="xbe/"               >Various</a>`, "XBE                ", "https://app.xbe.finance"],
      ["DODO                         ", `<a href="dodo/"              >Various</a>`, "DODO               ", "https://app.dodoex.io"],
      ["Aladdin                      ", `<a href="ald/"               >Various</a>`, "ALD                ", "https://app.aladdin.club"],
      ["Hundred                      ", `<a href="hundred/"           >Various</a>`, "HND                ", "https://hundred.finance"],
      ["Gro                          ", `<a href="gro/"               >Various</a>`, "GRO                ", "https://app.gro.xyz"],
      ["Enterdao                     ", `<a href="enterdao/"          >Various</a>`, "ENTR               ", "https://dao.enterdao.xyz"],
      ["Augmented Finance            ", `<a href="augmented/"         >Various</a>`, "AGF                ", "https://augmented.finance"],
      ["Synapse                      ", `<a href="synapse/"           >Various</a>`, "SYNAPSE            ", "https://synapseprotocol.com"],
      ["Tokemak                      ", `<a href="tokemak/"           >Various</a>`, "Various            ", "https://www.tokemak.xyz"],
      ["Lixir                        ", `<a href="lixir/"             >Various</a>`, "LIX                ", "https://app.lixir.finance"],
      ["Ubiquity                     ", `<a href="ubiquity/"          >Various</a>`, "UBQ                ", "https://uad.ubq.fi"],
      ["SDAO                         ", `<a href="sdao/"              >Various</a>`, "SDAO               ", "https://app.singularitydao.ai"],
      ["Botto                        ", `<a href="botto/"             >Various</a>`, "BOTTO              ", "https://app.botto.com"],
      ["Swapr                        ", `<a href="swapr/"             >Various</a>`, "SWPR               ", "https://swapr.eth.link"],
      ["Merit Circle                 ", `<a href="meritcircle/"       >Various</a>`, "MC                 ", "https://swap.meritcircle.io"],
      ["DAOventures                  ", `<a href="daoventures/"       >Various</a>`, "DAOVENTURES        ", "https://app.daoventures.co/invest"],
      ["Angle                        ", `<a href="angle/"             >Various</a>`, "ANGLE              ", "https://app.angle.money"],
      ["Beverage                     ", `<a href="beverage/"          >Various</a>`, "DRINK              ", "https://beverage.finance"],
      ["Nildao                       ", `<a href="nildao/"            >Various</a>`, "NIL                ", "https://www.nildao.xyz"],
      ["Sushi V2                     ", `<a href="sushiv2/"           >Various</a>`, "Various            ", "https://app.sushi.com"],
      ["GenomesDAO                   ", `<a href="genomesdao/"        >Various</a>`, "Various            ", "https://staking.genomes.io"],
      ["Yearn                        ", `<a href="yearn/"             >Various</a>`, "Various            ", "https://yearn.finance"],
      ["Instrumental                 ", `<a href="instrumental/"      >Various</a>`, "Instrumental       ", "https://app.instrumental.finance"],
      ["Curve                        ", `<a href="curve/"             >Various</a>`, "Various            ", "https://curve.fi"],
      ["DeFiner                      ", `<a href="definer/"           >Various</a>`, "FIN                ", "https://app.definer.org"],
      ["Looksrare                    ", `<a href="looksrare/"         >Various</a>`, "LOOKS              ", "https://looksrare.org"],
      ["Vader                        ", `<a href="vader/"             >Various</a>`, "VADER              ", "https://www.vaderprotocol.app"],
      ["WOWswap                      ", `<a href="wowswap/"           >Various</a>`, "WOW                 ", "https://wowswap.io"],
      ["Aladdin (Concentrator)       ", `<a href="concentrator/"      >Various</a>`, "aCRV                ", "https://concentrator.aladdin.club/#/vault"],
      ["Stargate                     ", `<a href="stargate/"          >Various</a>`, "STG                 ", "https://stargate.finance"],
      ["Backd                        ", `<a href="backd/"             >Various</a>`, "                    ", "https://backd.fund"],
      ["Jpegd                        ", `<a href="jpegd/"             >Various</a>`, "JPEG                ", "https://jpegd.io"],
      ["Bancor                       ", `<a href="bancor/"            >Various</a>`, "BNT                 ", "https://app.bancor.network"],
      ["UnoRe                        ", `<a href="unore/"             >Various</a>`, "UnoRe              ", "https://appv2.unore.io"],
      ["Convex (Frax)                ", `<a href="convex_frax/"       >Various</a>`, "Various            ", "https://frax.convexfinance.com"],
      ["Aura                         ", `<a href="aura/"              >Various</a>`, "AURA               ", "https://app.aura.finance"],
      ["Serenity Capital             ", `<a href="serenity/"          >Various</a>`, "PBL                ", "https://ethchain.serenitycapital.io"],
      ["Mero                         ", `<a href="mero/"              >Various</a>`, "                   ", "https://mero.finance"],
      ["Xconsoles                    ", `<a href="xconsoles/"         >Various</a>`, "GAME               ", "https://app.xconsoles.tv"],
      ["Helix Finance                ", `<a href="helix/"             >Various</a>`, "HELIX              ", "https://helix.finance"],
      ["Tokemak                      ", `<a href="tokemak/"           >Various</a>`, "TOKE               ", "https://app.tokemak.xyz"],
      ["Titanium                     ", `<a href="titanium/"          >Various</a>`, "T                  ", "https://t1.money"],
      ["Monolith                     ", `<a href="monolith/"          >Various</a>`, "SOLID              ", "https://alpha.mono.farm"],
      ["Complifi Vaults              ", `<a href="complifi_vaults/"   >Various</a>`, "                   ", ""],
      ["Verse                        ", `<a href="verse/"             >Various</a>`, "VERSE              ", "https://verse.bitcoin.com"],
      ["Archimedes                   ", `<a href="archimedes/"        >Various</a>`, "ARCH               ", "https://archimedesfi.com"],
      ["Conic Finance                ", `<a href="conic/"             >Various</a>`, "Various            ", "https://conic.finance"],
      ["Oceanpoint                   ", `<a href="oceanpoint/"        >Various</a>`, "BST                ", "https://app.oceanpoint.fi"],
      ["Silo Finance                 ", `<a href="silo/"              >Various</a>`, "SILO               ", "https://www.silo.finance"],
      ["Agility                      ", `<a href="agility/"           >Various</a>`, "esAGI              ", "https://agilitylsd.com"]
    ].reverse()
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
