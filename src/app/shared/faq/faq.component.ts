import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  questions!: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.questions=[{question:"How do I know emails are really from skillbound.com?",answer:"Spoof emails will typically request personal information, like passwords or credit card information.\n They typically start with a general greeting such as “Dear Skillbound.com member”.\n They may send you to links that look similar to a skillbound.com’s website page. Do not follow the links, and certainly don’t enter your login information. Instead, go to your browser and go direct to skillbound.com.\n They will often prompt you to answer at once or otherwise rush you in some way. Skillbound.com will never be in a hurry. Report any such spoof email to: help@skillbound.com"},
  {question:"How do I contact a member I wish to swap skills with, or speak to?",answer:"You can either search a member by name in the SEARCH MEMBER section or find a member by skill in the SEACH SKILL tabs. Alternatively, you can browse both members and skills using the BROWSE MEMBERS and SKILLS sections. Once you find a member you like you can page that member. You can leave a brief message and invite them to email you. Your email will be provided automatically if you page a member."},
  {question:"Someone is posting offensive content on their profile, can I remove it?",answer:"If you wish to report any offensive or obscene content on Skillbound.com please notify us at obscene@skillbound.com."},
  {question:"I think someone has access to my account, what should I do?",answer:"Change your password as soon as possible and send us an email at help@skillbound.com telling us why you think someone gained access to your account."},
  {question:"How do I set my profile to private?",answer:"Write to us at customerservice@skillbound.com and we will set your profile to private. This will stop people finding your profile by searching Members’ profiles. You will still receive emails from us notifying you of members who have skills that match your desired skills/skill sets however."},
  {question:"How do I change my photos on my profile?",answer:"Log in to your account. Go to Edit profile and the Edit pictures. And you will be prompted to delete or add to your pictures. You can also set one of your pictures to your default picture. This will be the main picture people will see. Remember don’t post pictures of people who haven’t given you their permission to do so. Don’t post obscene pictures and please don’t post copyrighted materials that you haven’t permission to post."},
  {question:"Someone is harassing me, what can I do?",answer:"Request having them blocked at help@skillbound.com, give reasons why they should be blocked or banned. Try ignoring them. Don’t respond to anyone who is offensive to you. They will quickly lose motivation to harass you."},
  {question:"How do I leave feedback on a member I have met with?",answer:"You can leave feedback on a member only if you and the other member have confirmed a meeting BEFORE a meeting takes place. Once BOTH parties have confirmed a meeting is scheduled and then BOTH confirmed it took place you may BOTH leave feedback. Find the feedback link on your home member’s page and follow the steps."
},
  {question:"Someone is using copyrighted material without permission, what should I do?",answer:"Contact us at help@skillbound.com explaining why you believe they are doing so."},
  {question:"How do I change my personal information?",answer:"Log in, go to your account, go to My Profile, edit profile and then you will be able to change your online profile, for example, you can change your password or user login name."},
  {question:"Is your service free?",answer:" Absolutely. At this time the site is supported by sponsors and advertisers. In the future we may add a premium service that is fee based, but right now this service is free. Never submit to an email purporting to be from Skillbound.com requesting your credit card, or bank information. Skillbound.com will never send such an email."},
  {question:"Can I invite my friends to Skillbound.com?",answer:"Yes you can. Just go to your account, go to invite a friend and an email will be sent to them on your behalf."},
  {question:"How do I terminate my account?",answer:"Send an email to terminator@skillbound.com, requesting that your account should come to a sad conclusion."}
]
  }

}
