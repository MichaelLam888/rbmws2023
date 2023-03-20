import React from 'react'
import { useContext } from 'react'
import { StatusContext } from './StatusContext'

export default function Loan_04() {

  const {cust_detial,setCust_detial}= useContext(StatusContext) 

  return (
    <div className="loan_agree">
      <h3><p className='title_2'>Third Party Agreement Confirmation 第三⽅協議確認書</p></h3>
<p>To 致: Lee Dor Cash Limited 利多喜有限公司&nbsp;&nbsp;<br />I/We<br />關於本⼈/吾等 <span className='blue_1'>{cust_detial.borrower}</span>，</p>
<p>holder of HKID / Passport No. / BR Certificate No.</p>
<p>證件編號 <span className='blue_1'>{cust_detial.id}</span> 的持有⼈(Address 地址: <span className='blue_1'>{cust_detial.address}</span>)，</p>
<p>refer to My/Our application to Lee Dor Cash Limited ("the Company") for a loan and hereby confirm that:</p>
<p>向利多喜有限公司 ("貴公司") 申請貸款⼀事，現謹確認：</p>
<p>I/We for or in relation to the procuring, negotiation, obtaining or application of the loan, guaranteeing or securing the repayment of the loan or any matters in connection therewith, I/We</p>
<p>本⼈/吾等因促致、洽商、取得或申請此筆貸款，或因擔保或保證此筆貸款的償還，或由於與此等事務有關，⽽</p>
<p><input id="tpa" disabled="disabled" name="tpa" type="checkbox" value="Y" /> have entered into or signed an agreement with a third party<br />&nbsp; &nbsp; &nbsp;與第三⽅達成或簽訂了協議</p>
<p><input id="tpa" checked="checked" disabled="disabled" name="tpa" type="checkbox" value="N" /> have not entered into or signed any agreement with any third party<br />&nbsp; &nbsp; &nbsp;從未與任何第三⽅達成或簽訂任何協議</p>
<p>(other than an agreement with solicitors instructed by me/us for the provision of legal services solely) (以上並不包括本⼈/吾等委任的律師純粹為提供法律服務⽽達成或簽訂的協議)</p>
<p>The name and address of the third party are as following</p>
<p>第三⽅的姓名/名稱及地址如下：</p>
<p>Name of the third party</p>
<p>第三⽅的姓名/名稱：</p>
<p>Address of the third party</p>
<p>第三⽅的地址：</p>
<p>The relationship between the company and the third party is</p>
<p>與貴公司關係為：</p>
<p>I/We here provide a copy of the third party agreement and attach it to the loan agreement.</p>
<p>本⼈/吾等謹此提供與第三⽅簽訂的協議副本⼀份，並夾附此等協議的副本於貸款協議內。</p>
<p>&nbsp;</p>
<p><strong><u>IMPORTANT NOTE:</u></strong></p>
<p><span><strong><u>Please note that it is an offence for a person to fraudulently induce a money lender to lend money by false or misleading statement or dishonest concealment of material facts.</u><br /></strong><strong><u>You should make full and honest disclosure of the above information on the involvement of any third parties in relation to the loan for the protection of your own interests.</u></strong></span></p>
<p><strong><u>重要提⽰：</u></strong></p>
<p><strong><u>請注意，任何⼈藉虛假、誤導性陳述或不誠實地隱瞞重要事實，⽽欺詐地誘使放債⼈貸出款項，即屬犯罪。你必須完整和誠實地披露上述涉及貸款的第三⽅的資料，以保障你⾃⼰的利益</u></strong></p>
<br />


<h3><p className='title_2'>Note of Explanation<br />解釋協議的備忘錄<br /><br /></p></h3><p>Venue 地點：Unit 1412, 14/F, Lippo Sun Plaza, 28 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong Name of Handling Staff 負責職員的姓名：Jason Wan (Position 職位：Admin)<br />Intending Borrower 擬借款⼈：<span className='blue_1'>{cust_detial.borrower}</span>, holder of 香港⾝份證: <span className='blue_1'>{cust_detial.id}</span> Address 地址：<span className='blue_1'>{cust_detial.address}</span></p>
<p>The aforesaid handling staff, have at the aforesaid date, time and venue explained clearly to the Intending Borrower all the terms and conditions of the Loan Agreement, the Lender hereby sets out the most important terms and conditions from the Loan Agreement:<br />上述負責職員，已於上述⽇期、時間及地點，向擬借款⼈清楚解釋貸款協議的全部條款及條文，貸⽅已列出貸款協議內的重要條款及<br />條文：<br /><br />(a) Amount of the principal of the loan 貸款本⾦額:<br />HK$ <span className='blue_1'>{cust_detial.loan_amt} HONG KONG DOLLARS {cust_detial.loan_amt_eng} ONLY</span><br />(b) Date of the making of the agreement 訂立協議⽇期: <span className='blue_1'>{cust_detial.loan_date}</span><br />(c) Date of the making of the loan 作出貸款⽇期: <span className='blue_1'>{cust_detial.loan_date}</span><br />(d) The interest rate per annum 貸款利率以年息百分率表⽰: <span className='blue_1'>{cust_detial.interest}</span><br />(e) Total amount of interest payable under the Agreement 於協議內應付利息之總額: HK$ <span className='blue_1'>{cust_detial.total_interest}</span><br />(f) The first repayment amount ⾸期還款額: HK$ <span className='blue_1'>{cust_detial.first_instalment_amt}</span><br />(g) Instalment amount 每期供款: HK$ <span className='blue_1'>{cust_detial.instalment_amt}</span><br />(h) Terms of repayment of the loan 償還貸款的條款: <span className='blue_1'>{cust_detial.tenors}</span><br />(i) The total amount of repayments 總供款額: HK$ <span className='blue_1'>{cust_detial.total_ins_amt}</span><br />(j) The possible consequences for any default in repayment under the agreement, including but not limited to<br />任何拖⽋還款⾏為的可能後果，包括:-<br /><br />i) The taking into possession and sale of any security involved (including the property charged, if any)<br />接管及出售所涉及的任何抵押物(包括已予押記的物業，如有的話);<br />ii) The overriding right of money lender to demand an immediate repayment<br />放債⼈可要求即時還款的凌駕性權利。<br />(k) Name and address of surety(s) (if any) 擔保⼈名稱及地址 (如有):<br />(l) Place of negotiation and completion of the agreement for the loan 貸款協議的洽商地點及完成地點:<br />Unit 1412, 14/F, Lippo Sun Plaza, 28 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong</p>
<p>I/we, the intending Borrower hereby confirm that the aforesaid handling staff has explained all the terms and conditions of the Loan Agreement to me/us. I/we fully understand the terms and conditions thereof before entering into the Loan Agreement.<br />本⼈/吾等擬借款⼈現謹確認上述職員已向本⼈/吾等解釋了貸款協議的條款及條文，⽽本⼈/吾等訂立貸款協議之前已完全明⽩貸款協<br />議的條款及條文。</p>


<br /><br />

<h3><p className='title_2'>MEMORANDUM UNDER SECTION 18 OF THE MONEY LENDERS ORDINANCE<br />貸款協議備忘錄《放債⼈條例第18條》</p></h3><p>
<br /><br />This document is a note of Agreement, but not part of Agreement. The details of Agreement should be referred to the Loan Agreement<br />本文乃摘記，不是協議的⼀部份。關於協議的詳請，請參閲貸款合約。<br />(a) Name and address of the money lender 放債⼈名稱及地址:<br />Name 名稱 : Lee Dor Cash Limited<br />Address 地址 : Unit 1412, 14/F, Lippo Sun Plaza, 28 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong<br />(b) Name and address of borrower(s) 借款⼈名稱及地址:<br />Name 名稱 : {cust_detial.borrower} Address 地址 : {cust_detial.address} <br />(c) Name and address of surety(s) (if any) 擔保⼈名稱及地址 (如有):<br />(d) Amount of the principal of the loan 貸款本⾦額:<br />HK$ {cust_detial.loan_amt}  {cust_detial.loan_amt_eng} <br />(e) Date of the making of the agreement 訂立協議⽇期: {cust_detial.loan_date} <br />(f) Date of the making of the loan 作出貸款⽇期: {cust_detial.loan_date} <br />(g) Terms of repayment of the loan 償還貸款的條款: {cust_detial.tenors}<br />(h) Form of security for the loan 貸款的保證形式: Nil.<br />(i) The rate of interest charged on the Loan expressed as a rate per cent per annum or the rate per cent per annum represented by the interest charged as calculated in accordance with Schedule 所收取的貸款利率，以年息百分率表<br />⽰，或以按照還款表計算的利息所代表的年息百分率表⽰: {cust_detial.interest}%<br />(j) Place of negotiation and completion of the agreement for the loan 貸款協議的洽商地點及完成地點:<br />Unit 1412, 14/F, Lippo Sun Plaza, 28 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong</p>
<p>I/We confirm and agree to the above terms and I/we confirm that I/we have received a copy of this Memorandum and the attached Schedule, being Schedule 3 of the Money Lenders Regulations.<br />我們確認及同意上述之條款摘要及確認我們已收到這份備忘錄及⼀份列載在本備忘錄附表之《放債⼈規例》附表3。</p>
<p>&nbsp;</p>
 

<h3><p className='title_2'>DECLARATION OF LOAN AGREEMENT AFFORDABILITY<br />貸款協議負擔能⼒聲明</p></h3>
<p>I/We<br />關於本⼈/吾等 {cust_detial.borrower}，<br />holder of HKID / Passport No. / BR Certificate No.<br />證件編號 {cust_detial.id} 的持有⼈(Address 地址: {cust_detial.address})，<br />hereby confirm that Lee Dor Cash Limited completed a comprehensive assessment of my ability to make repayments under the loan agreement, and have due regard to the outcome of the assessment in respect of my affordability.<br />得悉 利多喜有限公司 對本⼈的貸款協議經已進⾏全⾯的風險評估，充分慮及本⼈的負擔能⼒。<br />I hereby declare as follows:<br />本⼈特此聲明如下：</p>
<p>1. My current income and expenditure are able to make repayments under the loan agreement.<br />本⼈現時的收入及開⽀，絕對有能⼒償還貸款協議內的所有借貸款項<br />2. I am able to make repayments before the fall due over the life of the loan agreement.<br />本貸款協議有效期內到期還款時，本⼈有能⼒還款償還所有借貸款項<br />3. I need not to borrow to make the repayments.<br />本⼈毋須為了還款⽽借貸<br />4. The loan agreement without having a significant adverse impact on my overall financial situation.<br />本貸款協議不會對本⼈的整體財務狀況造成不良影響</p>

<br /><br />

<h3><p className='title_2'>Repayment Schedule 還款表</p></h3><p><br />Name of Borrower 借款⼈姓名 : {cust_detial.borrower}<br />Loan No. 貸款編號 : {cust_detial.loan_no} <br />Loan Date 起息⽇期 : {cust_detial.loan_date}<br />Loan Amount 貸款⾦額 :  {cust_detial.loan_amt} <br />Interest Method 計息⽅法 : {cust_detial.int_method}<br />Total Tenors 供款期數 : {cust_detial.tenors}<br />Repay. Cycle 還款週期 : Monthly 每⽉</p>
<img width="100%" src={cust_detial.repayment_form}></img>
 
<br /><br />
<h3><p className='title_2'>Acknowledge of Receipt 放款確認書</p></h3>
<p>Payout Date 放款⽇期 :&nbsp; {cust_detial.loan_date}</p>
<p>Loan No. 貸款編號&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp; {cust_detial.loan_no}</p>
<p>Borrower 借款⼈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {cust_detial.borrower}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; holder of 香港⾝份證: {cust_detial.id}</p>
<p>I/We refer to the said Loan Agreement amounting of HK$ {cust_detial.loan_amt} made between your company as the Lender and me/us as the Borrowers of even date.</p>
<p>本⼈/吾等同意上述⽇期及以上貸款合約向貴司借貸港幣 {cust_detial.loan_amt}。</p>
<p>&nbsp;</p>
<p>I/We hereby authorize your company to issue the loan amount advance to us under the said Loan Agreement in the following manner:</p>
<p>本⼈/吾等授權貴司按照以下⽅式⽀付該合約之貸款⾦額：</p>
<p>Payable Detail ⽀付細節 : 銀行轉帳</p>
<p>Payable to ⽀付予 : {cust_detial.borrower}</p>
<p>Up Front Interest 預付利息 : {cust_detial.up_front}</p>
<p>Amount(HK$) ⾦額(港幣) : {cust_detial.paid_amount}</p>
<p>Payout Method ⽀付⽅式:&nbsp;{cust_detial.paid_type}</p>
<p>總額 Total: {cust_detial.loan_amt}</p>
<p>&nbsp;</p>
 
    </div>


  )
}
