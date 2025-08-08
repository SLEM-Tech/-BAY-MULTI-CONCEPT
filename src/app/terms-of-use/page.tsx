"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
			<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
				<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
				Our Policies
				</h4>
				<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
				A. Bay Multi Concept Services Limited Policies
				</h3>
				<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
				At A. Bay Multi Concept Services Limited, we deliver diverse general merchandise and comprehensive contract services with multi-faceted business solutions, flexible service offerings, and customer-centric approaches to meet varied business needs.
				</span>
				<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "termsOfUse"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("termsOfUse")}
				>
					Terms of use
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "privacyPolicy"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("privacyPolicy")}
				>
					Privacy Policy
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "deliveryReturn"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("deliveryReturn")}
				>
					Delivery & Return
				</button>
				<button
					className={`px-2 xl:px-4 py-2 rounded-md ${
					activeTab === "refundPolicy"
						? "bg-white text-black"
						: "bg-[#F5F5F5] text-[#667085]"
					}`}
					onClick={() => handleTabClick("refundPolicy")}
				>
					Refund Policy
				</button>
				</div>
			</section>
			
			<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
				{activeTab === "termsOfUse" && (
				<div id='termsOfUse' className='text-[#667085]'>
					<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
					Terms of Use - A. Bay Multi Concept Services Limited
					</h4>

					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					By engaging A. Bay Multi Concept Services Limited for general merchandise supply or contract services, you agree to our comprehensive terms designed for flexible, multi-faceted business solutions:
					</p>

					<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
					<li>
						<span className='font-medium'>Multi-Concept Service Portfolio:</span> A. Bay Multi Concept provides diverse business solutions including general merchandise supply, contract services, project management, logistics coordination, business consulting, and specialized services across multiple industries and service sectors with adaptable approaches.
					</li>
					<li>
						<span className='font-medium'>Flexible Contract Terms:</span> Our contract services are designed with flexibility to accommodate varying project scopes, timelines, budget requirements, and changing business needs. We offer customized solutions tailored to specific client requirements and industry standards.
					</li>
					<li>
						<span className='font-medium'>General Merchandise Supply:</span> Comprehensive merchandise sourcing and supply services including consumer goods, business supplies, industrial materials, specialty items, and bulk procurement with quality assurance, competitive pricing strategies, and reliable delivery schedules.
					</li>
					<li>
						<span className='font-medium'>Multi-Industry Expertise:</span> Our experienced team brings knowledge across multiple industries enabling us to provide relevant solutions for diverse business sectors including retail, corporate, institutional, manufacturing, and specialized market segments.
					</li>
					<li>
						<span className='font-medium'>Service Integration:</span> We offer integrated service packages combining merchandise supply with contract services, logistics coordination, project management, and ongoing support to provide comprehensive business solutions under unified management and accountability.
					</li>
					<li>
						<span className='font-medium'>Quality Standards:</span> All merchandise and services meet established quality standards with verification processes, supplier auditing, performance monitoring, and customer satisfaction tracking to ensure consistent service excellence across all business areas.
					</li>
					<li>
						<span className='font-medium'>Payment Flexibility:</span> Multiple payment options including staged payments, milestone billing, net terms for qualified businesses, and flexible arrangements designed to accommodate various business cash flow requirements and project funding structures.
					</li>
					<li>
						<span className='font-medium'>Customer-Centric Approach:</span> Our service delivery is customized to individual customer requirements with dedicated account management, regular communication, responsive support, and adaptive solutions throughout the service relationship.
					</li>
					<li>
						<span className='font-medium'>Scalable Solutions:</span> Services are designed to scale with your business growth, from small-scale projects to large enterprise solutions, with the flexibility to adjust scope, resources, and service levels as requirements evolve.
					</li>
					</ul>

					<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<span className='font-medium'>Service Excellence:</span> We maintain high service standards through continuous improvement, customer feedback integration, staff training, and technology adoption to ensure exceptional service delivery across all business areas.
					</p>

					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<span className='font-medium'>Long-term Partnerships:</span> We focus on building lasting business relationships through reliable service delivery, competitive pricing, responsive customer support, and solutions that grow and adapt with your business needs over time.
					</p>
				</div>
				)}

				{activeTab === "privacyPolicy" && (
				<div id='privacyPolicy' className='text-[#667085]'>
					<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
					PRIVACY POLICY - A. BAY MULTI CONCEPT SERVICES LIMITED
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					A. Bay Multi Concept Services Limited is committed to protecting client privacy across our diverse service portfolio including general merchandise supply, contract services, and multi-industry business solutions. This policy explains our comprehensive data practices.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					MULTI-SERVICE DATA COLLECTION
					</h4>
					
					<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
					<li>Client business information for service customization and account management across all service areas</li>
					<li>Project specifications and contract requirements for accurate service delivery and coordination</li>
					<li>Merchandise preferences and procurement requirements for supply chain optimization</li>
					<li>Payment information and billing preferences for flexible payment arrangements and invoicing</li>
					<li>Service feedback and satisfaction data for continuous improvement and quality enhancement</li>
					<li>Communication records for project coordination, customer support, and relationship management</li>
					<li>Performance metrics and analytics for service optimization and business intelligence</li>
					<li>Multi-industry business requirements for specialized service delivery and customization</li>
					</ul>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					COMPREHENSIVE DATA USAGE PRACTICES
					</h4>
					
					<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
					<li>To deliver customized multi-concept services across diverse business areas and industries</li>
					<li>To coordinate complex projects involving multiple service components and stakeholders</li>
					<li>To optimize merchandise supply chains and procurement processes for client efficiency</li>
					<li>To manage flexible payment arrangements and billing for varied service combinations</li>
					<li>To provide integrated business solutions that adapt to changing client requirements</li>
					<li>To maintain service quality standards across all business areas and client relationships</li>
					<li>To develop long-term strategic partnerships and anticipate future business needs</li>
					<li>To ensure compliance with industry regulations and professional service standards</li>
					</ul>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					PRIVACY PROTECTION ACROSS SERVICES
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					We implement comprehensive privacy protection measures across all service areas with secure data handling, confidential project information protection, and restricted access protocols. Client business information is protected through professional confidentiality agreements, industry-standard security measures, and role-based access controls that ensure data is used only for authorized service delivery purposes.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					MULTI-INDUSTRY PARTNER RELATIONSHIPS
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					Suppliers, subcontractors, and service partners operate under strict confidentiality agreements protecting client business information across all service areas. Data sharing is limited to specific service delivery requirements with explicit client authorization. All partnerships maintain professional privacy standards and comply with industry-specific confidentiality requirements.
					</p>

					<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
					CLIENT CONTROL & SERVICE TRANSPARENCY
					</h4>
					
					<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
					Clients have comprehensive control over their business information across all service areas with access to project data, service records, and performance analytics. Business relationships are built on transparency with clear communication about data usage, service delivery processes, and privacy protection measures. For multi-service privacy inquiries and data management requests, contact privacy@abaymulti.com.ng.
					</p>
				</div>
				)}

				{activeTab === "deliveryReturn" && (
				<div id='deliveryReturn' className='text-[#667085]'>
					<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
					MULTI-SERVICE DELIVERY POLICY - A. BAY MULTI CONCEPT SERVICES LIMITED
					</h3>

					<p className='text-xs md:text-sm xl:text-base mb-4'>
					A. Bay Multi Concept Services Limited provides flexible delivery solutions across our diverse service portfolio with customized approaches for merchandise supply, contract services, and integrated business solutions to meet varied client requirements and operational needs.
					</p>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						General Merchandise Delivery
					</h4>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
						<h5 className='font-medium text-xs md:text-sm mb-1'>Standard Delivery Options</h5>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Same-day delivery within Lagos for urgent business requirements</li>
							<li>Next-day delivery across Lagos State with tracking capabilities</li>
							<li>Scheduled delivery appointments accommodating client operational hours</li>
							<li>Bulk delivery coordination for large orders and multiple locations</li>
						</ul>
						</div>
						<div>
						<h5 className='font-medium text-xs md:text-sm mb-1'>Specialized Delivery Services</h5>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>White glove delivery for sensitive or high-value merchandise</li>
							<li>Installation and setup services for complex equipment</li>
							<li>Multi-site delivery coordination for distributed operations</li>
							<li>Custom packaging and handling for specialized merchandise</li>
						</ul>
						</div>
					</div>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Contract Service Delivery
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Project-based delivery with milestone achievements and progress reporting</li>
						<li>Flexible service scheduling to minimize business disruption and operational impact</li>
						<li>Multi-phase delivery for complex projects with staged implementation plans</li>
						<li>Quality checkpoints and client approval processes throughout service delivery</li>
						<li>Post-delivery support and service optimization included with all projects</li>
						<li>Comprehensive documentation and service records provided for all deliverables</li>
					</ul>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Integrated Service Solutions
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Coordinated delivery of combined merchandise and service packages</li>
						<li>Unified project management for multi-component business solutions</li>
						<li>Synchronized delivery schedules across different service areas</li>
						<li>Single point of contact for complex multi-service implementations</li>
						<li>Integrated quality assurance covering all service components</li>
						<li>Consolidated reporting and documentation for comprehensive solutions</li>
					</ul>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Service Guarantees & Quality Assurance
					</h4>
					<div className='space-y-3'>
						<div>
						<p className='font-medium text-xs md:text-sm'>Performance Guarantees:</p>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Service delivery guarantee with timeline commitments and quality standards</li>
							<li>Customer satisfaction guarantee with corrective action protocols</li>
							<li>Flexible service adjustments based on changing client requirements</li>
							<li>Performance monitoring and continuous improvement processes</li>
						</ul>
						</div>
						<div>
						<p className='font-medium text-xs md:text-sm'>Quality Standards:</p>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Pre-delivery inspection and quality verification for all merchandise</li>
							<li>Service quality checkpoints throughout contract execution</li>
							<li>Client walkthrough and approval for all major deliverables</li>
							<li>Post-delivery follow-up and satisfaction confirmation</li>
						</ul>
						</div>
					</div>
					</div>

					<div className='mb-6'>
					<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
						Customer Support & Communication
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>Dedicated account management for multi-service client relationships</li>
						<li>Real-time delivery tracking and communication throughout the process</li>
						<li>Regular progress updates for complex projects and service implementations</li>
						<li>Responsive customer support across all service areas and business hours</li>
						<li>Proactive communication about potential delays or changes</li>
						<li>24/7 emergency support for critical business situations</li>
					</ul>
					</div>

					{/* <div className='mt-6 pt-4 border-t border-gray-200'>
					<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
						Multi-Service Contact Information
					</h4>
					<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>General Services: info@abaymulti.com.ng</li>
						<li>Contract Services: contracts@abaymulti.com.ng</li>
						<li>Delivery Coordination: delivery@abaymulti.com.ng</li>
						<li>Customer Support: support@abaymulti.com.ng</li>
						<li>Phone: +234-801-234-5020</li>
						<li>Website: www.abaymulti.com.ng</li>
					</ul>
					</div> */}
				</div>
				)}

				{activeTab === "refundPolicy" && (
				<div id='refundPolicy' className='text-[#667085]'>
					<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
					REFUND POLICY - A. BAY MULTI CONCEPT SERVICES LIMITED
					</h3>
					<p className='text-xs md:text-sm xl:text-base mb-4'>
					Effective Date: {new Date().toLocaleDateString('en-GB')}
					</p>

					<p className='text-xs md:text-sm xl:text-base mb-4'>
					At A. Bay Multi Concept Services Limited, we are committed to delivering exceptional multi-faceted business solutions through our general merchandise and contract services. Our comprehensive refund policy ensures fair treatment while maintaining service quality across all business areas and client relationships.
					</p>

					<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
					<li>
						<span className='font-medium'>1. Multi-Service Refund Framework</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Comprehensive refund coverage across all service areas and business solutions</li>
						<li>Flexible refund terms accommodating diverse project types and service combinations</li>
						<li>Service-specific refund criteria tailored to merchandise supply and contract services</li>
						<li>Customer satisfaction guarantee with performance-based refund options</li>
						<li>Prorated refunds for partially completed multi-phase projects and integrated services</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>2. Merchandise Supply Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Quality-based refunds for merchandise not meeting agreed specifications or standards</li>
						<li>Delivery failure refunds for undelivered or significantly delayed orders beyond agreed timelines</li>
						<li>Custom sourcing refunds if specifically requested items cannot be obtained within reasonable timeframes</li>
						<li>Bulk order adjustments for quantity discrepancies or specification variations</li>
						<li>Supplier default protection with alternative sourcing coordination at no additional cost</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>3. Contract Service Refunds</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Performance-based refunds for services not meeting agreed deliverables or quality standards</li>
						<li>Timeline guarantee refunds for significant delays due to our performance or coordination failures</li>
						<li>Quality standard refunds for work not meeting professional expectations or industry standards</li>
						<li>Scope completion refunds for incomplete project phases or deliverable shortfalls</li>
						<li>Client satisfaction refunds with comprehensive corrective action alternatives</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>4. Integrated Service Solutions</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Comprehensive solution refunds for integrated service packages not achieving promised outcomes</li>
						<li>Component-based refunds for specific elements of multi-service projects that fail to perform</li>
						<li>Performance optimization refunds if integrated solutions don't achieve stated business targets</li>
						<li>Service coordination refunds for failures in multi-service management and delivery coordination</li>
						<li>Customer outcome guarantee with measurable performance criteria and success metrics</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>5. Non-Refundable Services & Situations</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Successfully completed services that meet all agreed specifications and client acceptance criteria</li>
						<li>Custom solutions and specialized services delivered according to approved specifications</li>
						<li>Third-party costs and expenses already incurred on behalf of clients</li>
						<li>Client-initiated changes or cancellations after service delivery has commenced</li>
						<li>Force majeure events and circumstances beyond our reasonable control</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>6. Customer-Centric Refund Process</span>
						<p className='mt-1'>Our flexible refund request process accommodates diverse client needs:</p>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Account Manager Direct Contact for ongoing projects and relationships</li>
						<li>Comprehensive service review with detailed client consultation</li>
						<li>Flexible resolution approach based on individual client needs and circumstances</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>7. Comprehensive Assessment Process</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Multi-disciplinary review team assessing refunds across all service areas</li>
						<li>Performance analysis against established service level agreements and quality standards</li>
						<li>Client impact assessment considering business objectives and operational requirements</li>
						<li>Third-party evaluation available for complex disputes and performance disagreements</li>
						<li>Collaborative resolution approach with client input throughout the assessment process</li>
						</ul>
					</li>

					<li>
						<span className='font-medium'>8. Flexible Resolution Options</span>
						<ul className='list-disc pl-5 mt-1 space-y-1'>
						<li>Service credits applicable across all business areas and future projects</li>
						<li>Alternative service provision to meet original client objectives and requirements</li>
						<li>Service enhancement at no additional cost to address performance issues and gaps</li>
						<li>Extended service periods and additional support as compensation for service shortfalls</li>
						<li>Custom resolution packages tailored to specific client situations and business needs</li>
						</ul>
					</li>
					</ul>

					{/* <div className='mt-6 pt-4 border-t border-gray-200'>
					<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
						Contact Information
					</h4>
					<p className='text-xs md:text-sm xl:text-base'>
						For multi-service refunds and comprehensive resolution:
					</p>
					<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
						<li>A. Bay Multi Concept Services Limited</li>
						<li>Email: refunds@abaymulti.com.ng</li>
						<li>Customer Service: service@abaymulti.com.ng</li>
						<li>Account Management: accounts@abaymulti.com.ng</li>
						<li>Phone: +234-801-234-5020</li>
						<li>Website: www.abaymulti.com.ng</li>
					</ul>
					</div> */}
				</div>
				)}
			</div>
			</main>
		</AppLayout>
	);
};

export default Page;
