import React, { Component } from "react";
import "../../styles/serviceAgreement.css";

class ServiceAgreement extends Component {
  state = {};
  render() {
    return (
      <div className="service-agreement container">
        <div className="row">
          <div className="service-agreement-left col-3 navbar-light bg-light d-none d-lg-block">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#section0">
                  开始
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#section0">
                  概述
                </a>
              </li>
              <li>
                <a className="nav-link text-secondary" href="#sectionA">
                  服务协议
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionA">
                  A. 帐户条款
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionB">
                  B. 支付，退款，升级/降级 条款
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionC">
                  C. 解除和终止
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionD">
                  D. 服务和价格的修订
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionE">
                  E. 用户内容版权及合法性规则
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionF">
                  F. 合轻版权
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionG">
                  G. 隐私条款
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionH">
                  H. 有限保证及服务免责
                </a>
              </li>
              <li className="nav-item ml-3 my-1">
                <a className="nav-link text-secondary" href="#sectionI">
                  I. 其他规定
                </a>
              </li>
            </ul>
          </div>

          <div className="service-agreement-right col-lg-8 offset-1  col-10">
            <p className="service-agreement-right-title"> 服务协议</p>
            <div className="service-agreement-right-space" id="section0"></div>
            <div>
              <p className="service-agreement-right-primary">概述</p>
              <p className="service-agreement-right-content">
                欢迎您成为本网站注册用户，并申请及接受南京合轻网络技术有限公司（以下简称“合轻”）提供的服务。
                <br /> <br />
                在您注册成为本网站用户前，敬请务必仔细阅读本协议所有条款，特别是限制、免除合轻责任和限制用户权利的条款。若您一旦注册为本网站用户，或使用
                <br /> <br />
                labvisin.cn 网站或者任何与合轻，
                <br /> <br />
                labvision相关的服务，则意味着您已完全接受本协议项下的全部条款及本网站公布的各项业务规则。若您不同意本协议条款，敬请立即停止注册本网站用户或主动停止使用本服务。
                <br /> <br />
                合轻保留在不提前通知用户的情况下，对本协议条款或业务规则做任何修改或补充的权利，修改或补充后的协议条款或业务规则将在本网站公布，并自公布时立即生效。
                <br /> <br />
                未来发布的任何新的基于本服务的增强功能，包括新的工具和资源都将自动适用本协议，您继续访问本网站或继续使用新服务即视为您接受修订后的本协议及业务规则；否则，您应通过停止访问且拒绝使用服务、删除您在本网站的帐户等方式终止本协议。
                <br /> <br />{" "}
                如果您代表某个机构而非您个人注册、登录和使用本网站和/或服务，则您将被认为获得充分授权代表该机构同意本协议条款以及本协议条款不时的修改和补充。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionA"></div>
            <div>
              <p className="service-agreement-right-primary">
                A.&nbsp;&nbsp;帐户条款
              </p>
              <p className="service-agreement-right-content">
                您必须具有完全民事行为能力和民事权利能力方可使用本服务。
                <br /> <br />
                为了能正常访问本网站和使用本服务，您必须依照本网站注册提示填写准确的、真实的姓名/名称、电子邮箱、手机号以及其他任何在注册时要求的信息，并须确保在上述注册信息发生变化时及时更新信息及确保更新信息的有效性和合法性。
                <br /> <br />
                若您提供任何错误、虚假、过时或不完整的资料，或者合轻依其独立判断怀疑资料为错误、虚假、过时或不完整，合轻有权限制、封禁您在本网站的帐号，及暂停或终止提供服务的部分或全部功能。在此情况下，合轻将不向您承担任何责任。
                <br /> <br />
                您的帐户只可以由您本人登录及使用，多人共享帐号是被禁止的。不过您可以根据购买的套餐内容，在本协议及相关业务规则允许的范围内，添加多个协作帐户。您知悉并同意，您与协作帐户使用人之间或各协作帐户使用人之间的任何纠纷将由您及/或相关方自行解决及承担责任，与合轻无关；合轻将不会介入该等纠纷的处理，亦不会就此向您或任何相关方承担任何责任。
                <br /> <br />
                您有责任维护您的帐户和密码的安全性。合轻不会因您未能遵守这一安全保障义务而对因此导致的任何损失或损害承担任何责任。
                <br /> <br />
                您仅能为自身内部运营之目的使用本服务，您不得出于任何非法或未经授权的目的使用本服务，包括但不限于不得以营利或非营利目的以任何方式向任何第三方提供本服务或其任何部分，不得利用本服务从事任何违法或侵犯第三方知识产权或其他合法权益的活动。
                <br /> <br />
                您在使用本服务过程中应遵守所有可适用的法律法规及本协议、业务规则的规定，不得发生任何违法、违反本协议或侵犯第三方合法权益的行为；您应对您帐户项下的全部行为承担相应法律责任。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionB"></div>
            <div>
              <p className="service-agreement-right-primary">
                B.&nbsp;&nbsp;支付，退款，升级/降级
              </p>
              <p className="service-agreement-right-content">
                本服务收费方式为预付费、按月/年扣费。非因合轻原因导致本服务在服务期限内中止或终止的，已支付费用不予退还。合轻不会为未使用完的月费、年费、升级/降级套餐退款，也不会为服务计划中尚未使用的剩余期限退款。为了保证公平地对待每一个用户，不存在例外情况。
                <br /> <br />
                服务降级后可能会导致您帐户项下的内容、功能、特征或能力的丧失。您明确知悉并同意上述变化及风险，合轻对因此发生的任何损失不承担任何责任。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionC"></div>
            <div>
              <p className="service-agreement-right-primary">
                C.&nbsp;&nbsp;解除和终止
              </p>
              <p className="service-agreement-right-content">
                您只能以电子邮件提出注销帐户申请。您须按照上述规定注销帐户，并应对注销帐户的行为负责。
                <br /> <br />
                一旦您的帐户被注销，所有在本服务中的内容都将被立即删除，该等内容及任何信息将无法恢复。
                <br /> <br />
                如果您在缴足费的服务期届满
                <br /> <br />
                之前取消服务，您的取消将立即生效，您将不会被收取后续费用，剩余服务期的已缴付费用不予退还。
                <br /> <br />
                如您违反本协议任何条款、任何业务规则或可适用的法律法规，或发生任何第三方侵权投诉，合轻将有权限制、封禁您在本网站的帐号，及暂停或终止提供服务的部分或全部功能，并有权要求您赔偿因此给合轻造成的全部损失。除此之外，合轻将有权因任何原因，在任何时间自行决定暂停或终止您的帐号，或拒绝提供任何/所有现在或将来的服务。如果因合轻原因终止向您提供某项收费服务，合轻的义务仅在于向您返还您尚未使用的服务期对应的部分费用。
                <br /> <br />
                终止本服务将导致终止及删除您的帐户及帐户中的所有内容及信息。
                <br /> <br />
                合轻保留无解释的，对任何人因任何原因在任何时间拒绝服务的权利。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionD"></div>
            <div>
              <p className="service-agreement-right-primary">
                D.&nbsp;&nbsp;服务和价格的修订
              </p>
              <p className="service-agreement-right-content">
                合轻保留随时变更、中止或终止部分或全部服务的权利，并保留根据实际情况随时调整合轻提供的服务种类、形式、费用标准的权利。
                <br /> <br />
                所有服务的价格，包括但不限于包月/包年计划收费服务的改变，都会收到来自合轻的通知。
                <br /> <br />
                合轻可通过推送通知、邮件、讨论区公告、全站公告或改变合轻网站或服务本身等方式对服务的变更、终止或终止及服务价格及其变更进行通知。您继续访问本网站及/或使用本服务，即视为您接受变更后的服务及价格。
                <br /> <br />
                因服务变更、中止或终止，或服务价格变更对您与第三方之间的任何法律关系产生任何影响的，合轻将不承担任何责任。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionE"></div>
            <div>
              <p className="service-agreement-right-primary">
                E.&nbsp;&nbsp;用户内容版权和合法性规则
              </p>
              <p className="service-agreement-right-content">
                合轻不拥有您在本服务中使用的您自身的任何内容的版权。
                <br /> <br />
                您知悉并同意，您将项目设置为公开，即表示您同意让其他人查看您的内容（包括同意公开任何尚未发表的著作权内容），并同意及允许他人浏览和复制您的项目及其任何要素、内容。
                <br /> <br />
                您应确保使用本服务上传、存储、传播的任何内容的合法性，确保内容不违反任何法律法规的规定，不违反公序良俗，版权清洁且您有权通过本服务上传、存储、传播，不侵犯任何第三方的知识产权或其他合法权益。任何与您上传、存储、传播的内容有关的知识产权纠纷及其他纠纷将由您与相关方自行解决并承担全部责任，与合轻无关，合轻因此遭受任何损失的，您同意全额赔偿。本平台如果收到关于内容合法性或权属的任何投诉或异议，将有权不经通知用户删除相关内容。
                <br /> <br />
                合轻不预先筛选内容；如任何第三方对您的任何内容提出任何异议，或合轻认为您的任何内容涉嫌违法、违反本协议、侵犯第三方权益、存在任何不当，或可能影响其他用户或第三方权益，合轻有自行决定拒绝或删除任何内容的权利（而非义务），且不承担任何责任。您必须为第三方因认为您的内容违法、
                <br /> <br />
                违反本协议，侵犯第三方的权益（包括知识产权）或与您有关的其他原因而对合轻提出的任何索赔、主张、请求或诉讼，赔偿合轻因此发生的全部费用及遭受的全部损失。
                <br /> <br />
                合轻有权，但没有义务，删除在合轻看来包含非法的、攻击、威胁、中伤、诽谤、淫秽、色情或任何其他不良信息的内容和帐户，或删除任何违反法律规定、本协议约定、对合轻任何用户、员工或第三方造成侵害或损害，或合轻认为可能存在任何其他不良影响的内容和帐户。
                <br /> <br />
                你不得传播任何蠕虫或病毒或具有破坏 性的任何代码。
                <br /> <br />
                本服务允许用户上传、存储内容并允许其他用户浏览、复制或以其他方式使用用户设置为公开的内容。您了解并知悉，该等用户上传、存储的内容，内容所有权、知识产权归属用户所有，与内容相关的一切责任亦由用户自行承担，与合轻无关。您通过本服务使用其他用户或第三方提供的内容时，应标明出处及内容提供方，商业性或营利性使用应事先取得内容提供方的许可或同意；您未能遵守上述使用规则所引发的责任及第三方损失将由您自行承担，与合轻无关，给合轻造成损失的，还须赔偿合轻的全部损失。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionF"></div>
            <div>
              <p className="service-agreement-right-primary">
                F.&nbsp;&nbsp;合轻版权
              </p>
              <p className="service-agreement-right-content">
                本网站及本服务的外观设计、应用程序、源代码、商标、标示图案（LOGO）、界面设计、应用程序编程接口及相关著作权，以及与合轻提供的服务有关的任何著作权及其他知识产权均归合轻所有，其它本协议中未经提及的权利亦由合轻保留。
                <br /> <br />
                未经合轻事先书面许可，您不能复制、拷贝、模仿或者使用上述知识产权的任何部分，不得复制、拷贝或使用本服务的任何部分HTML/
                <br /> <br />
                CSS，JavaScript或视觉设计元素和理念。
                <br /> <br />
                未经合轻事先书面同意，您不得为任何目的自行实施、利用、转让或许可他人实施上述任何知识产权或其任何部分。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionG"></div>
            <div>
              <p className="service-agreement-right-primary">
                G.&nbsp;&nbsp;隐私条款
              </p>
              <p className="service-agreement-right-content">
                您同意本网站及合轻为提供本服务及优化服务等相关目的收集、保留、存储您的用户信息及一些用户选项（例如隐私设置）。
                <br /> <br />
                您同意合轻收集和使用有关您所使用服务的技术性或诊断性信息。收集到的这些信息将用于改进本网站或本协议服务的内容和技术，提升服务品质。
                <br /> <br />
                合轻将不会在不通知的情况下透露用户的个人信息，除非根据法律法规的规定、国家行政、司法机关的要求予以披露，或在合轻为保护合轻、合轻其他用户或任何第三方的合法权益认为必要时进行披露。
                <br /> <br />
                其他隐私政策请见本网站不时公布及修订的隐私条款。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionH"></div>
            <div>
              <p className="service-agreement-right-primary">
                H.&nbsp;&nbsp;有限保证及服务免责
              </p>
              <p className="service-agreement-right-content">
                您同意合轻只基于“现况”及“现有”基础提供服务。合轻保证提供的本服务与相应的服务介绍及合轻不时公布的服务承诺相符。除上述保证外，合轻不对本网站及/或本服务作出任何其他明示或暗示的保证，包括但不限于不保证：
                <br /> <br />
                （1）本服务将满足您的具体要求或需要；
                <br />
                （2）本服务将不间断，及时、安全或无差错；
                <br />
                （3）使用本服务所获得的结果准确或可靠；
                <br />
                （4）本服务的任何错误都将被纠正。您知悉及同意上述服务状况，并同意自行承担使用本服务的全部风险。
                <br /> <br />
                您知悉及同意，合轻不对您可能通过合轻接触的到任何内容负责，您同意自担风险使用本服务。
                <br /> <br />
                基于互联网的开放性属性，您知悉将图片、信息或任何资料上传到互联网上，有可能会被其他组织或个人复制、转载、擅改或做其它非法用途，您必须充分意识到此类风险的存在；您明确同意使用本网站及本协议服务所存在的风险将完全由您自己承担；因第三方侵权所产生的责任和损失将由您向第三方追索，合轻无须就此向您承担任何责任。
                <br /> <br />
                合轻只向正在付费中的帐户持有人提供技术支持。
                <br /> <br />
                您知悉并理解本服务使用第三方供应商或托管合作伙伴提供必要的硬件、软件、网络、存储以及相关的技术来运行服务，您同意遵守该等第三方的任何业务规则，并同意因该等第三方硬件、软件、网络、存储以及相关技术所引发的任何故障、意外、责任或风险将由您与该等第三方解决，合轻不就此作出任何承诺或保证，亦不承担任何责任。
                <br /> <br />
                您不得以任何方式明示或暗示您或非合轻所有及运营的任何网站或服务与合轻有任何关联。
                <br /> <br />
                不论在何种情况下，合轻均不对由于Internet连接故障，通讯或其他系统的故障，黑客攻击、病毒、电力故障，罢工，劳动争议，暴乱，起义，骚乱，火灾，洪水，风暴，爆炸，不可抗力，战争，政府行为，国际、国内法院的命令，第三方的不作为或任何合轻不能合理控制的原因而造成的本平台不能访问、信息及数据的延误、停滞或错误，不能提供或延迟提供本服务而承担责任。
                <br /> <br />
                合轻将采取现有技术水平项下合理可行的措施努力保护用户帐号和数据隐私，但合轻不能确保用户的全部私人通讯及其他资料不会通过本隐私规则中未列明的途径泄露出去，您知悉并同意承担上述风险，并同意合轻无须就此承担任何责任。
                <br /> <br />
                不论是否可以预见，不论是源于何种形式的行为或不作为，合轻不对因任何原因造成的任何特别的、间接的、惩罚性的、突发性的或其他任何损害（包括但不限于利润或利息的损失、因您隐私泄漏、您个人资料等的泄露、被盗用等，因未能履行包括诚信或合理谨慎在内的任何责任、因过失和因任何其他原因造成的金钱上的损失或其他损失等）承担责任。
                <br /> <br />
                除合轻故意损害用户利益以外，任何情况下，合轻可能向您承担的赔偿、补偿或其他任何责任的限额将不超过您就该等服务向合轻支付的服务费金额。在赔偿损失时设定了限额，是因为合轻在订立本协议时无法预见到您的损失；若您的损失可能大于赔偿限额的，您应当在签订本协议前书面告知合轻，并根据风险大小与合轻另行协商确定服务价格。
              </p>
            </div>
            <div className="service-agreement-right-space" id="sectionI"></div>
            <div>
              <p className="service-agreement-right-primary">
                I.&nbsp;&nbsp;其他规定
              </p>
              <p className="service-agreement-right-content">
                您同意未经合轻的明确书面许可，不复制、出售、转售或以其他方式向第三方提供本服务或其任何部分。
                <br /> <br />
                如果您的带宽使用率显著高于平均带宽，或合轻认为您占用其他合轻客户的资源，合轻将保留立即禁用帐户的权利或终止您项目的托管，直到您减少您的带宽消耗至合轻认为合理的水平。
                <br /> <br />
                本协议项下合轻向您发出的所有通知，合轻可按以下任一方式发出：（1）通过推送通知、邮件、讨论区公告、全站公告等形式发出；（2）向您注册时或者此后变更您信息时向合轻提供的电子邮箱发送电子邮件（发出即视为送达）。
                <br /> <br />
                合轻未能或延迟行使本协议规定的任何权利、权力或特权不应视为放弃行使，且任何单一或部分权利、权力或特权的行使不应排除权利、权力或特权的任何其他或进一步的行使或本协议项下任何其他权利、权力或特权的行使。
                <br /> <br />
                本协议构成您与合轻之间的全部协议，并取代您与合轻之间的任何先前的协议（包括但不限于本协议的任何以前的版本）。
                <br /> <br />
                本协议之解释与适用，均应依照中华人民共和国法律进行。与本协议有关的争议，由合轻所在地有管辖权的法院管辖。
                <br /> <br />
                任何与本服务条款有关的问题请发送邮件给 support@labvision.cc
                <br /> <br />
                本协议最终解释权归合轻所有。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceAgreement;
