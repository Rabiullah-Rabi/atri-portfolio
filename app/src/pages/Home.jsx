import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { usebannerCb, usebanner_containerCb, useBanner_text_wrapperCb, useBanner_CTA_flexCb, useFlex10Cb, useHeaderCb, usenavbarCb, usenav_link_wrapperCb, uselink_iconCb, usetrustedBy_sectionCb, useFlex7Cb, useservice_sectionCb, useservice_containerCb, useservice_wrapperCb, useService_cardCb, useDiv5Cb, useDiv6Cb, useproject_sectionCb, useproject_headerCb, useproject_section_headerCb, useFlex17Cb, useDiv13Cb, useDiv14Cb, useFlex18Cb, useDiv16Cb, useDiv15Cb, useFlex19Cb, useDiv18Cb, useDiv17Cb, useFlex20Cb, useblog_sectionCb, useblog_containerCb, useblog_titleCb, useFlex23Cb, useblogs_wrapperCb, useDiv22Cb, useFlex24Cb, useDiv29Cb, useFlex31Cb, useDiv30Cb, useFlex32Cb, useDiv31Cb, useFlex33Cb, useDiv32Cb, useFlex34Cb, useFlex40Cb, useFlex39Cb, useDiv39Cb, useFlex41Cb, useDiv42Cb, useDiv43Cb, useFlex42Cb, useFlex43Cb, useFlex44Cb, useDiv44Cb, useFlex45Cb, useFlex46Cb, useDiv45Cb, useFlex47Cb, useFlex49Cb, useFlex48Cb, useDiv47Cb, useFlex53Cb, useDiv49Cb, useFlex52Cb, useDiv53Cb, useFlex59Cb, useFlex56Cb, useFlex61Cb, useDiv52Cb, useFlex60Cb, useFlex64Cb, useFlex62Cb, useDiv54Cb, useFlex63Cb, useFlex67Cb, useFlex65Cb, useDiv55Cb, useFlex66Cb, usetestimonial_sectionCb, useFlex70Cb, useDiv58Cb, useFlex72Cb, useDiv59Cb, useFlex73Cb, useDiv60Cb, useDiv61Cb, usefaq_sectionCb, usefaq_containerCb, useFlex74Cb, useDiv62Cb, useDiv65Cb, useFlex79Cb, useFlex78Cb, useFlex77Cb, useDiv66Cb, useFlex84Cb, useFlex85Cb, useFlex86Cb, useFlex87Cb, useDiv67Cb, useImage4Cb, useBanner_title_gradientCb, usebanner_paragraphCb, useBanner_titleCb, useBanner_CTA_1Cb, useImage10Cb, useLink15Cb, uselogoCb, usenav_linkCb, usenav_linCb, useLink10Cb, useLink11Cb, useLink12Cb, useiconCb, useTextBox4Cb, useImage5Cb, useImage6Cb, useImage7Cb, useImage8Cb, useTextBox5Cb, useTextBox6Cb, useservice_iconCb, useService_titleCb, useService_descriptionCb, useUnorderedList1Cb, useUnorderedList2Cb, useUnorderedList3Cb, useUnorderedList4Cb, useUnorderedList5Cb, useUnorderedList6Cb, useTextBox9Cb, useTextBox10Cb, useImage16Cb, useUnorderedList7Cb, useUnorderedList8Cb, useUnorderedList9Cb, useTextBox11Cb, useTextBox12Cb, useImage17Cb, useDiv19Cb, useLink16Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useImage23Cb, useTextBox27Cb, useTextBox28Cb, useLink17Cb, useImage24Cb, useImage26Cb, useTextBox29Cb, useTextBox30Cb, useImage25Cb, useLink18Cb, useImage28Cb, useTextBox31Cb, useTextBox32Cb, useImage27Cb, useLink19Cb, useTextBox34Cb, useTextBox35Cb, useLink20Cb, useImage29Cb, useTextBox36Cb, useTextBox37Cb, useImage30Cb, useLink21Cb, useTextBox50Cb, useTextBox51Cb, useLink28Cb, useImage37Cb, useTextBox52Cb, useTextBox53Cb, useImage38Cb, useLink29Cb, useTextBox54Cb, useTextBox55Cb, useLink30Cb, useImage39Cb, useTextBox56Cb, useTextBox57Cb, useImage40Cb, useLink31Cb, useTextBox67Cb, useTextBox65Cb, useTextBox66Cb, useImage47Cb, useImage48Cb, useImage49Cb, useImage50Cb, useImage51Cb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useTextBox71Cb, useImage52Cb, useImage53Cb, useTextBox72Cb, useTextBox73Cb, useTextBox74Cb, useTextBox78Cb, useTextBox79Cb, useTextBox80Cb, useImage55Cb, useImage58Cb, useTextBox87Cb, useImage60Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useImage59Cb, useImage61Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useImage62Cb, useImage63Cb, useTextBox94Cb, useTextBox95Cb, useTextBox96Cb, useImage64Cb, useTextBox97Cb, useTextBox98Cb, useImage69Cb, useImage70Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useButton1Cb, useButton2Cb, useTextBox109Cb, useTextBox110Cb, useAccordion1Cb, useAccordion2Cb, useAccordion3Cb, useAccordion4Cb, useAccordion5Cb, useAccordion6Cb, useAccordion7Cb, useAccordion8Cb, useTextBox121Cb, useTextBox112Cb, useLink36Cb, useLink40Cb, useLink43Cb, useLink44Cb, useLink45Cb, useLink46Cb, useLink47Cb, useLink48Cb, useLink49Cb, useLink50Cb, useImage74Cb, useTextBox114Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const bannerProps = useStore((state)=>state["Home"]["banner"]);
const bannerIoProps = useIoStore((state)=>state["Home"]["banner"]);
const bannerCb = usebannerCb()
const banner_containerProps = useStore((state)=>state["Home"]["banner_container"]);
const banner_containerIoProps = useIoStore((state)=>state["Home"]["banner_container"]);
const banner_containerCb = usebanner_containerCb()
const Banner_text_wrapperProps = useStore((state)=>state["Home"]["Banner_text_wrapper"]);
const Banner_text_wrapperIoProps = useIoStore((state)=>state["Home"]["Banner_text_wrapper"]);
const Banner_text_wrapperCb = useBanner_text_wrapperCb()
const Banner_CTA_flexProps = useStore((state)=>state["Home"]["Banner_CTA_flex"]);
const Banner_CTA_flexIoProps = useIoStore((state)=>state["Home"]["Banner_CTA_flex"]);
const Banner_CTA_flexCb = useBanner_CTA_flexCb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const nav_link_wrapperProps = useStore((state)=>state["Home"]["nav_link_wrapper"]);
const nav_link_wrapperIoProps = useIoStore((state)=>state["Home"]["nav_link_wrapper"]);
const nav_link_wrapperCb = usenav_link_wrapperCb()
const link_iconProps = useStore((state)=>state["Home"]["link_icon"]);
const link_iconIoProps = useIoStore((state)=>state["Home"]["link_icon"]);
const link_iconCb = uselink_iconCb()
const trustedBy_sectionProps = useStore((state)=>state["Home"]["trustedBy_section"]);
const trustedBy_sectionIoProps = useIoStore((state)=>state["Home"]["trustedBy_section"]);
const trustedBy_sectionCb = usetrustedBy_sectionCb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const service_sectionProps = useStore((state)=>state["Home"]["service_section"]);
const service_sectionIoProps = useIoStore((state)=>state["Home"]["service_section"]);
const service_sectionCb = useservice_sectionCb()
const service_containerProps = useStore((state)=>state["Home"]["service_container"]);
const service_containerIoProps = useIoStore((state)=>state["Home"]["service_container"]);
const service_containerCb = useservice_containerCb()
const service_wrapperProps = useStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperIoProps = useIoStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperCb = useservice_wrapperCb()
const Service_cardProps = useStore((state)=>state["Home"]["Service_card"]);
const Service_cardIoProps = useIoStore((state)=>state["Home"]["Service_card"]);
const Service_cardCb = useService_cardCb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const project_sectionProps = useStore((state)=>state["Home"]["project_section"]);
const project_sectionIoProps = useIoStore((state)=>state["Home"]["project_section"]);
const project_sectionCb = useproject_sectionCb()
const project_headerProps = useStore((state)=>state["Home"]["project_header"]);
const project_headerIoProps = useIoStore((state)=>state["Home"]["project_header"]);
const project_headerCb = useproject_headerCb()
const project_section_headerProps = useStore((state)=>state["Home"]["project_section_header"]);
const project_section_headerIoProps = useIoStore((state)=>state["Home"]["project_section_header"]);
const project_section_headerCb = useproject_section_headerCb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const blog_sectionProps = useStore((state)=>state["Home"]["blog_section"]);
const blog_sectionIoProps = useIoStore((state)=>state["Home"]["blog_section"]);
const blog_sectionCb = useblog_sectionCb()
const blog_containerProps = useStore((state)=>state["Home"]["blog_container"]);
const blog_containerIoProps = useIoStore((state)=>state["Home"]["blog_container"]);
const blog_containerCb = useblog_containerCb()
const blog_titleProps = useStore((state)=>state["Home"]["blog_title"]);
const blog_titleIoProps = useIoStore((state)=>state["Home"]["blog_title"]);
const blog_titleCb = useblog_titleCb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const blogs_wrapperProps = useStore((state)=>state["Home"]["blogs_wrapper"]);
const blogs_wrapperIoProps = useIoStore((state)=>state["Home"]["blogs_wrapper"]);
const blogs_wrapperCb = useblogs_wrapperCb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const testimonial_sectionProps = useStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionIoProps = useIoStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionCb = usetestimonial_sectionCb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const faq_sectionProps = useStore((state)=>state["Home"]["faq_section"]);
const faq_sectionIoProps = useIoStore((state)=>state["Home"]["faq_section"]);
const faq_sectionCb = usefaq_sectionCb()
const faq_containerProps = useStore((state)=>state["Home"]["faq_container"]);
const faq_containerIoProps = useIoStore((state)=>state["Home"]["faq_container"]);
const faq_containerCb = usefaq_containerCb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Div66Props = useStore((state)=>state["Home"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Home"]["Div66"]);
const Div66Cb = useDiv66Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Banner_title_gradientProps = useStore((state)=>state["Home"]["Banner_title_gradient"]);
const Banner_title_gradientIoProps = useIoStore((state)=>state["Home"]["Banner_title_gradient"]);
const Banner_title_gradientCb = useBanner_title_gradientCb()
const banner_paragraphProps = useStore((state)=>state["Home"]["banner_paragraph"]);
const banner_paragraphIoProps = useIoStore((state)=>state["Home"]["banner_paragraph"]);
const banner_paragraphCb = usebanner_paragraphCb()
const Banner_titleProps = useStore((state)=>state["Home"]["Banner_title"]);
const Banner_titleIoProps = useIoStore((state)=>state["Home"]["Banner_title"]);
const Banner_titleCb = useBanner_titleCb()
const Banner_CTA_1Props = useStore((state)=>state["Home"]["Banner_CTA_1"]);
const Banner_CTA_1IoProps = useIoStore((state)=>state["Home"]["Banner_CTA_1"]);
const Banner_CTA_1Cb = useBanner_CTA_1Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Link15Props = useStore((state)=>state["Home"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Home"]["Link15"]);
const Link15Cb = useLink15Cb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const nav_linkProps = useStore((state)=>state["Home"]["nav_link"]);
const nav_linkIoProps = useIoStore((state)=>state["Home"]["nav_link"]);
const nav_linkCb = usenav_linkCb()
const nav_linProps = useStore((state)=>state["Home"]["nav_lin"]);
const nav_linIoProps = useIoStore((state)=>state["Home"]["nav_lin"]);
const nav_linCb = usenav_linCb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const iconProps = useStore((state)=>state["Home"]["icon"]);
const iconIoProps = useIoStore((state)=>state["Home"]["icon"]);
const iconCb = useiconCb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const service_iconProps = useStore((state)=>state["Home"]["service_icon"]);
const service_iconIoProps = useIoStore((state)=>state["Home"]["service_icon"]);
const service_iconCb = useservice_iconCb()
const Service_titleProps = useStore((state)=>state["Home"]["Service_title"]);
const Service_titleIoProps = useIoStore((state)=>state["Home"]["Service_title"]);
const Service_titleCb = useService_titleCb()
const Service_descriptionProps = useStore((state)=>state["Home"]["Service_description"]);
const Service_descriptionIoProps = useIoStore((state)=>state["Home"]["Service_description"]);
const Service_descriptionCb = useService_descriptionCb()
const UnorderedList1Props = useStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1IoProps = useIoStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1Cb = useUnorderedList1Cb()
const UnorderedList2Props = useStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2IoProps = useIoStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2Cb = useUnorderedList2Cb()
const UnorderedList3Props = useStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3IoProps = useIoStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3Cb = useUnorderedList3Cb()
const UnorderedList4Props = useStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4IoProps = useIoStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4Cb = useUnorderedList4Cb()
const UnorderedList5Props = useStore((state)=>state["Home"]["UnorderedList5"]);
const UnorderedList5IoProps = useIoStore((state)=>state["Home"]["UnorderedList5"]);
const UnorderedList5Cb = useUnorderedList5Cb()
const UnorderedList6Props = useStore((state)=>state["Home"]["UnorderedList6"]);
const UnorderedList6IoProps = useIoStore((state)=>state["Home"]["UnorderedList6"]);
const UnorderedList6Cb = useUnorderedList6Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const UnorderedList7Props = useStore((state)=>state["Home"]["UnorderedList7"]);
const UnorderedList7IoProps = useIoStore((state)=>state["Home"]["UnorderedList7"]);
const UnorderedList7Cb = useUnorderedList7Cb()
const UnorderedList8Props = useStore((state)=>state["Home"]["UnorderedList8"]);
const UnorderedList8IoProps = useIoStore((state)=>state["Home"]["UnorderedList8"]);
const UnorderedList8Cb = useUnorderedList8Cb()
const UnorderedList9Props = useStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9IoProps = useIoStore((state)=>state["Home"]["UnorderedList9"]);
const UnorderedList9Cb = useUnorderedList9Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Link16Props = useStore((state)=>state["Home"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Home"]["Link16"]);
const Link16Cb = useLink16Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Link17Props = useStore((state)=>state["Home"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Home"]["Link17"]);
const Link17Cb = useLink17Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Link18Props = useStore((state)=>state["Home"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["Home"]["Link18"]);
const Link18Cb = useLink18Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Link19Props = useStore((state)=>state["Home"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["Home"]["Link19"]);
const Link19Cb = useLink19Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Link20Props = useStore((state)=>state["Home"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["Home"]["Link20"]);
const Link20Cb = useLink20Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Link21Props = useStore((state)=>state["Home"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["Home"]["Link21"]);
const Link21Cb = useLink21Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Link28Props = useStore((state)=>state["Home"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["Home"]["Link28"]);
const Link28Cb = useLink28Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Link29Props = useStore((state)=>state["Home"]["Link29"]);
const Link29IoProps = useIoStore((state)=>state["Home"]["Link29"]);
const Link29Cb = useLink29Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Link30Props = useStore((state)=>state["Home"]["Link30"]);
const Link30IoProps = useIoStore((state)=>state["Home"]["Link30"]);
const Link30Cb = useLink30Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Link31Props = useStore((state)=>state["Home"]["Link31"]);
const Link31IoProps = useIoStore((state)=>state["Home"]["Link31"]);
const Link31Cb = useLink31Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Accordion1Props = useStore((state)=>state["Home"]["Accordion1"]);
const Accordion1IoProps = useIoStore((state)=>state["Home"]["Accordion1"]);
const Accordion1Cb = useAccordion1Cb()
const Accordion2Props = useStore((state)=>state["Home"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Home"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion3Props = useStore((state)=>state["Home"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Home"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion4Props = useStore((state)=>state["Home"]["Accordion4"]);
const Accordion4IoProps = useIoStore((state)=>state["Home"]["Accordion4"]);
const Accordion4Cb = useAccordion4Cb()
const Accordion5Props = useStore((state)=>state["Home"]["Accordion5"]);
const Accordion5IoProps = useIoStore((state)=>state["Home"]["Accordion5"]);
const Accordion5Cb = useAccordion5Cb()
const Accordion6Props = useStore((state)=>state["Home"]["Accordion6"]);
const Accordion6IoProps = useIoStore((state)=>state["Home"]["Accordion6"]);
const Accordion6Cb = useAccordion6Cb()
const Accordion7Props = useStore((state)=>state["Home"]["Accordion7"]);
const Accordion7IoProps = useIoStore((state)=>state["Home"]["Accordion7"]);
const Accordion7Cb = useAccordion7Cb()
const Accordion8Props = useStore((state)=>state["Home"]["Accordion8"]);
const Accordion8IoProps = useIoStore((state)=>state["Home"]["Accordion8"]);
const Accordion8Cb = useAccordion8Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Link36Props = useStore((state)=>state["Home"]["Link36"]);
const Link36IoProps = useIoStore((state)=>state["Home"]["Link36"]);
const Link36Cb = useLink36Cb()
const Link40Props = useStore((state)=>state["Home"]["Link40"]);
const Link40IoProps = useIoStore((state)=>state["Home"]["Link40"]);
const Link40Cb = useLink40Cb()
const Link43Props = useStore((state)=>state["Home"]["Link43"]);
const Link43IoProps = useIoStore((state)=>state["Home"]["Link43"]);
const Link43Cb = useLink43Cb()
const Link44Props = useStore((state)=>state["Home"]["Link44"]);
const Link44IoProps = useIoStore((state)=>state["Home"]["Link44"]);
const Link44Cb = useLink44Cb()
const Link45Props = useStore((state)=>state["Home"]["Link45"]);
const Link45IoProps = useIoStore((state)=>state["Home"]["Link45"]);
const Link45Cb = useLink45Cb()
const Link46Props = useStore((state)=>state["Home"]["Link46"]);
const Link46IoProps = useIoStore((state)=>state["Home"]["Link46"]);
const Link46Cb = useLink46Cb()
const Link47Props = useStore((state)=>state["Home"]["Link47"]);
const Link47IoProps = useIoStore((state)=>state["Home"]["Link47"]);
const Link47Cb = useLink47Cb()
const Link48Props = useStore((state)=>state["Home"]["Link48"]);
const Link48IoProps = useIoStore((state)=>state["Home"]["Link48"]);
const Link48Cb = useLink48Cb()
const Link49Props = useStore((state)=>state["Home"]["Link49"]);
const Link49IoProps = useIoStore((state)=>state["Home"]["Link49"]);
const Link49Cb = useLink49Cb()
const Link50Props = useStore((state)=>state["Home"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["Home"]["Link50"]);
const Link50Cb = useLink50Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()

  return (<>
  <Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Image className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}/>
<Flex className="p-Home nav_link_wrapper bpt" {...nav_link_wrapperProps} {...nav_link_wrapperCb} {...nav_link_wrapperIoProps}>
<Link className="p-Home nav_link bpt" {...nav_linkProps} {...nav_linkCb} {...nav_linkIoProps}/>
<Link className="p-Home nav_lin bpt" {...nav_linProps} {...nav_linCb} {...nav_linIoProps}/>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<Flex className="p-Home link_icon bpt" {...link_iconProps} {...link_iconCb} {...link_iconIoProps}>
<Link className="p-Home Link12 bpt" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Image className="p-Home icon bpt" {...iconProps} {...iconCb} {...iconIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home banner bpt" {...bannerProps} {...bannerCb} {...bannerIoProps}>
<Flex className="p-Home banner_container bpt" {...banner_containerProps} {...banner_containerCb} {...banner_containerIoProps}>
<Div className="p-Home Banner_text_wrapper bpt" {...Banner_text_wrapperProps} {...Banner_text_wrapperCb} {...Banner_text_wrapperIoProps}>
<TextBox className="p-Home Banner_title_gradient bpt" {...Banner_title_gradientProps} {...Banner_title_gradientCb} {...Banner_title_gradientIoProps}/>
<TextBox className="p-Home Banner_title bpt" {...Banner_titleProps} {...Banner_titleCb} {...Banner_titleIoProps}/>
<TextBox className="p-Home banner_paragraph bpt" {...banner_paragraphProps} {...banner_paragraphCb} {...banner_paragraphIoProps}/>
<Flex className="p-Home Banner_CTA_flex bpt" {...Banner_CTA_flexProps} {...Banner_CTA_flexCb} {...Banner_CTA_flexIoProps}>
<Link className="p-Home Banner_CTA_1 bpt" {...Banner_CTA_1Props} {...Banner_CTA_1Cb} {...Banner_CTA_1IoProps}/>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Link className="p-Home Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
</Div>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home trustedBy_section bpt" {...trustedBy_sectionProps} {...trustedBy_sectionCb} {...trustedBy_sectionIoProps}>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home service_section bpt" {...service_sectionProps} {...service_sectionCb} {...service_sectionIoProps}>
<Flex className="p-Home service_container bpt" {...service_containerProps} {...service_containerCb} {...service_containerIoProps}>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Flex className="p-Home service_wrapper bpt" {...service_wrapperProps} {...service_wrapperCb} {...service_wrapperIoProps}>
<Div className="p-Home Service_card bpt" {...Service_cardProps} {...Service_cardCb} {...Service_cardIoProps}>
<Image className="p-Home service_icon bpt" {...service_iconProps} {...service_iconCb} {...service_iconIoProps}/>
<TextBox className="p-Home Service_title bpt" {...Service_titleProps} {...Service_titleCb} {...Service_titleIoProps}/>
<TextBox className="p-Home Service_description bpt" {...Service_descriptionProps} {...Service_descriptionCb} {...Service_descriptionIoProps}/>
<UnorderedList className="p-Home UnorderedList1 bpt" {...UnorderedList1Props} {...UnorderedList1Cb} {...UnorderedList1IoProps}/>
<UnorderedList className="p-Home UnorderedList2 bpt" {...UnorderedList2Props} {...UnorderedList2Cb} {...UnorderedList2IoProps}/>
<UnorderedList className="p-Home UnorderedList3 bpt" {...UnorderedList3Props} {...UnorderedList3Cb} {...UnorderedList3IoProps}/>
</Div>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<UnorderedList className="p-Home UnorderedList6 bpt" {...UnorderedList6Props} {...UnorderedList6Cb} {...UnorderedList6IoProps}/>
<UnorderedList className="p-Home UnorderedList5 bpt" {...UnorderedList5Props} {...UnorderedList5Cb} {...UnorderedList5IoProps}/>
<UnorderedList className="p-Home UnorderedList4 bpt" {...UnorderedList4Props} {...UnorderedList4Cb} {...UnorderedList4IoProps}/>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<UnorderedList className="p-Home UnorderedList9 bpt" {...UnorderedList9Props} {...UnorderedList9Cb} {...UnorderedList9IoProps}/>
<UnorderedList className="p-Home UnorderedList8 bpt" {...UnorderedList8Props} {...UnorderedList8Cb} {...UnorderedList8IoProps}/>
<UnorderedList className="p-Home UnorderedList7 bpt" {...UnorderedList7Props} {...UnorderedList7Cb} {...UnorderedList7IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home project_section bpt" {...project_sectionProps} {...project_sectionCb} {...project_sectionIoProps}>
<Flex className="p-Home project_header bpt" {...project_headerProps} {...project_headerCb} {...project_headerIoProps}>
<Div className="p-Home project_section_header bpt" {...project_section_headerProps} {...project_section_headerCb} {...project_section_headerIoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
<Link className="p-Home Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Link className="p-Home Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Link className="p-Home Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Link className="p-Home Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}/>
</Flex>
<Flex className="p-Home blog_section bpt" {...blog_sectionProps} {...blog_sectionCb} {...blog_sectionIoProps}>
<Flex className="p-Home blog_container bpt" {...blog_containerProps} {...blog_containerCb} {...blog_containerIoProps}>
<Div className="p-Home blog_title bpt" {...blog_titleProps} {...blog_titleCb} {...blog_titleIoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Link className="p-Home Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
</Div>
<Div className="p-Home blogs_wrapper bpt" {...blogs_wrapperProps} {...blogs_wrapperCb} {...blogs_wrapperIoProps}>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Link className="p-Home Link21 bpt" {...Link21Props} {...Link21Cb} {...Link21IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Link className="p-Home Link28 bpt" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Link className="p-Home Link29 bpt" {...Link29Props} {...Link29Cb} {...Link29IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Link className="p-Home Link30 bpt" {...Link30Props} {...Link30Cb} {...Link30IoProps}/>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Link className="p-Home Link31 bpt" {...Link31Props} {...Link31Cb} {...Link31IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Div>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Div>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Div>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Div>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Div className="p-Home Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Div>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home testimonial_section bpt" {...testimonial_sectionProps} {...testimonial_sectionCb} {...testimonial_sectionIoProps}>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Div>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
</Div>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home faq_section bpt" {...faq_sectionProps} {...faq_sectionCb} {...faq_sectionIoProps}>
<Flex className="p-Home faq_container bpt" {...faq_containerProps} {...faq_containerCb} {...faq_containerIoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<Accordion className="p-Home Accordion1 bpt" {...Accordion1Props} {...Accordion1Cb} {...Accordion1IoProps}/>
<Accordion className="p-Home Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
<Accordion className="p-Home Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Home Accordion4 bpt" {...Accordion4Props} {...Accordion4Cb} {...Accordion4IoProps}/>
</Div>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<Accordion className="p-Home Accordion8 bpt" {...Accordion8Props} {...Accordion8Cb} {...Accordion8IoProps}/>
<Accordion className="p-Home Accordion7 bpt" {...Accordion7Props} {...Accordion7Cb} {...Accordion7IoProps}/>
<Accordion className="p-Home Accordion6 bpt" {...Accordion6Props} {...Accordion6Cb} {...Accordion6IoProps}/>
<Accordion className="p-Home Accordion5 bpt" {...Accordion5Props} {...Accordion5Cb} {...Accordion5IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Link className="p-Home Link36 bpt" {...Link36Props} {...Link36Cb} {...Link36IoProps}/>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
</Div>
<Div className="p-Home Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Link className="p-Home Link40 bpt" {...Link40Props} {...Link40Cb} {...Link40IoProps}/>
<Link className="p-Home Link43 bpt" {...Link43Props} {...Link43Cb} {...Link43IoProps}/>
<Link className="p-Home Link44 bpt" {...Link44Props} {...Link44Cb} {...Link44IoProps}/>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Link className="p-Home Link47 bpt" {...Link47Props} {...Link47Cb} {...Link47IoProps}/>
<Link className="p-Home Link46 bpt" {...Link46Props} {...Link46Cb} {...Link46IoProps}/>
<Link className="p-Home Link45 bpt" {...Link45Props} {...Link45Cb} {...Link45IoProps}/>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Link className="p-Home Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
<Link className="p-Home Link49 bpt" {...Link49Props} {...Link49Cb} {...Link49IoProps}/>
<Link className="p-Home Link48 bpt" {...Link48Props} {...Link48Cb} {...Link48IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Flex>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
  </>);
}
