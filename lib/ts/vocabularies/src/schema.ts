import namespace, {NamespaceBuilder} from "@rdfjs/namespace";
import {NamedNode} from "@rdfjs/types";

/**
 * Schema.org vocabulary. Copied from rdf-ns-builders and changed to use https:// instead of http:// to fit with
 * rdflib SDO.
 */
interface Schema {
  "": NamedNode<"https://schema.org/">;
  /**
   * A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D formats are available (e.g. see [Wikipedia](https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats)); specific encoding formats can be represented using the [[encodingFormat]] property applied to the relevant [[MediaObject]]. For the
   * case of a single file published after Zip compression, the convention of appending '+zip' to the [[encodingFormat]] can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using [[3DModel]].
   */
  "3DModel": NamedNode<"https://schema.org/3DModel">;
  /** Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of. */
  isPartOf: NamedNode<"https://schema.org/isPartOf">;
  /** A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset, i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 [[AudioObject]]s). */
  MediaObject: NamedNode<"https://schema.org/MediaObject">;
  /** A radio channel that uses AM. */
  AMRadioChannel: NamedNode<"https://schema.org/AMRadioChannel">;
  /** A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup. */
  RadioChannel: NamedNode<"https://schema.org/RadioChannel">;
  /** Reference documentation for application programming interfaces (APIs). */
  APIReference: NamedNode<"https://schema.org/APIReference">;
  /** A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc. */
  TechArticle: NamedNode<"https://schema.org/TechArticle">;
  /** Abdomen clinical examination. */
  Abdomen: NamedNode<"https://schema.org/Abdomen">;
  /** A type of physical examination of a patient performed by a physician. */
  PhysicalExam: NamedNode<"https://schema.org/PhysicalExam">;
  /** Web page type: About page. */
  AboutPage: NamedNode<"https://schema.org/AboutPage">;
  /** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page. */
  WebPage: NamedNode<"https://schema.org/WebPage">;
  /** The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction. */
  AcceptAction: NamedNode<"https://schema.org/AcceptAction">;
  /** The act of organizing tasks/objects/events by associating resources to it. */
  AllocateAction: NamedNode<"https://schema.org/AllocateAction">;
  /**
   * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
   * For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Accommodation: NamedNode<"https://schema.org/Accommodation">;
  /** Entities that have a somewhat fixed, physical extension. */
  Place: NamedNode<"https://schema.org/Place">;
  /**
   * Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
   *
   */
  AccountingService: NamedNode<"https://schema.org/AccountingService">;
  /** Financial services business. */
  FinancialService: NamedNode<"https://schema.org/FinancialService">;
  /** The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process. */
  AchieveAction: NamedNode<"https://schema.org/AchieveAction">;
  /** An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](http://schema.org/docs/actions.html). */
  Action: NamedNode<"https://schema.org/Action">;
  /** The most generic type of item. */
  Thing: NamedNode<"https://schema.org/Thing">;
  /** A set of requirements that must be fulfilled in order to perform an Action. */
  ActionAccessSpecification: NamedNode<
    "http://schema.org/ActionAccessSpecification"
  >;
  /** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc. */
  Intangible: NamedNode<"https://schema.org/Intangible">;
  /** The status of an Action. */
  ActionStatusType: NamedNode<"https://schema.org/ActionStatusType">;
  /** Lists or enumerations dealing with status types. */
  StatusEnumeration: NamedNode<"https://schema.org/StatusEnumeration">;
  /** The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight). */
  ActivateAction: NamedNode<"https://schema.org/ActivateAction">;
  /** An agent controls a device or application. */
  ControlAction: NamedNode<"https://schema.org/ControlAction">;
  /** Represents the activation fee part of the total price for an offered product, for example a cellphone contract. */
  ActivationFee: NamedNode<"https://schema.org/ActivationFee">;
  /** Enumerates different price components that together make up the total price for an offered product. */
  PriceComponentTypeEnumeration: NamedNode<
    "http://schema.org/PriceComponentTypeEnumeration"
  >;
  /** An in-progress action (e.g., while watching the movie, or driving to a location). */
  ActiveActionStatus: NamedNode<"https://schema.org/ActiveActionStatus">;
  /** Active, but not recruiting new participants. */
  ActiveNotRecruiting: NamedNode<"https://schema.org/ActiveNotRecruiting">;
  /** The status of a medical study. Enumerated type. */
  MedicalStudyStatus: NamedNode<"https://schema.org/MedicalStudyStatus">;
  /** The act of editing by adding an object to a collection. */
  AddAction: NamedNode<"https://schema.org/AddAction">;
  /** The act of managing by changing/editing the state of the object. */
  UpdateAction: NamedNode<"https://schema.org/UpdateAction">;
  /** A geographical region, typically under the jurisdiction of a particular government. */
  AdministrativeArea: NamedNode<"https://schema.org/AdministrativeArea">;
  /** An adult entertainment establishment. */
  AdultEntertainment: NamedNode<"https://schema.org/AdultEntertainment">;
  /** A business providing entertainment. */
  EntertainmentBusiness: NamedNode<"https://schema.org/EntertainmentBusiness">;
  /** Enumeration of considerations that make a product relevant or potentially restricted for adults only. */
  AdultOrientedEnumeration: NamedNode<
    "http://schema.org/AdultOrientedEnumeration"
  >;
  /** Lists or enumerations—for example, a list of cuisines or music genres, etc. */
  Enumeration: NamedNode<"https://schema.org/Enumeration">;
  /** An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content. */
  AdvertiserContentArticle: NamedNode<
    "http://schema.org/AdvertiserContentArticle"
  >;
  /** An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
  Article: NamedNode<"https://schema.org/Article">;
  /** Physical activity of relatively low intensity that depends primarily on the aerobic energy-generating process; during activity, the aerobic metabolism uses oxygen to adequately meet energy demands during exercise. */
  AerobicActivity: NamedNode<"https://schema.org/AerobicActivity">;
  /** Categories of physical activity, organized by physiologic classification. */
  PhysicalActivityCategory: NamedNode<
    "http://schema.org/PhysicalActivityCategory"
  >;
  /** When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined. */
  AggregateOffer: NamedNode<"https://schema.org/AggregateOffer">;
  /** An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/). */
  Offer: NamedNode<"https://schema.org/Offer">;
  /** The average rating based on multiple ratings or reviews. */
  AggregateRating: NamedNode<"https://schema.org/AggregateRating">;
  /** A rating is an evaluation on a numeric scale, such as 1 to 5 stars. */
  Rating: NamedNode<"https://schema.org/Rating">;
  /** The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants. */
  AgreeAction: NamedNode<"https://schema.org/AgreeAction">;
  /** The act of responding instinctively and emotionally to an object, expressing a sentiment. */
  ReactAction: NamedNode<"https://schema.org/ReactAction">;
  /** An organization that provides flights for passengers. */
  Airline: NamedNode<"https://schema.org/Airline">;
  /** An organization such as a school, NGO, corporation, club, etc. */
  Organization: NamedNode<"https://schema.org/Organization">;
  /** An airport. */
  Airport: NamedNode<"https://schema.org/Airport">;
  /** A public structure, such as a town hall or concert hall. */
  CivicStructure: NamedNode<"https://schema.org/CivicStructure">;
  /** AlbumRelease. */
  AlbumRelease: NamedNode<"https://schema.org/AlbumRelease">;
  /** The kind of release which this album is: single, EP or album. */
  MusicAlbumReleaseType: NamedNode<"https://schema.org/MusicAlbumReleaseType">;
  /** Item contains alcohol or promotes alcohol consumption. */
  AlcoholConsideration: NamedNode<"https://schema.org/AlcoholConsideration">;
  /**
   * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
   *
   * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
   */
  AlignmentObject: NamedNode<"https://schema.org/AlignmentObject">;
  /** All-wheel Drive is a transmission layout where the engine drives all four wheels. */
  AllWheelDriveConfiguration: NamedNode<
    "http://schema.org/AllWheelDriveConfiguration"
  >;
  /** A value indicating which roadwheels will receive torque. */
  DriveWheelConfigurationValue: NamedNode<
    "http://schema.org/DriveWheelConfigurationValue"
  >;
  /** Content about the allergy-related aspects of a health topic. */
  AllergiesHealthAspect: NamedNode<"https://schema.org/AllergiesHealthAspect">;
  /** HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]]. */
  HealthAspectEnumeration: NamedNode<
    "http://schema.org/HealthAspectEnumeration"
  >;
  /** The act of manipulating/administering/supervising/controlling one or more objects. */
  OrganizeAction: NamedNode<"https://schema.org/OrganizeAction">;
  /** A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices. */
  AmpStory: NamedNode<"https://schema.org/AmpStory">;
  /** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
  CreativeWork: NamedNode<"https://schema.org/CreativeWork">;
  /** An amusement park. */
  AmusementPark: NamedNode<"https://schema.org/AmusementPark">;
  /** Physical activity that is of high-intensity which utilizes the anaerobic metabolism of the body. */
  AnaerobicActivity: NamedNode<"https://schema.org/AnaerobicActivity">;
  /** An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions. */
  AnalysisNewsArticle: NamedNode<"https://schema.org/AnalysisNewsArticle">;
  /**
   * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
   *
   * A more detailed overview of [schema.org News markup](/docs/news.html) is also available.
   *
   */
  NewsArticle: NamedNode<"https://schema.org/NewsArticle">;
  /** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures. */
  AnatomicalStructure: NamedNode<"https://schema.org/AnatomicalStructure">;
  /** The most generic type of entity related to health and the practice of medicine. */
  MedicalEntity: NamedNode<"https://schema.org/MedicalEntity">;
  /** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems. */
  AnatomicalSystem: NamedNode<"https://schema.org/AnatomicalSystem">;
  /** Represents the broad notion of Android-based operating systems. */
  AndroidPlatform: NamedNode<"https://schema.org/AndroidPlatform">;
  /** Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested [in github](https://github.com/schemaorg/schemaorg/issues/3057). */
  DigitalPlatformEnumeration: NamedNode<
    "http://schema.org/DigitalPlatformEnumeration"
  >;
  /** A specific branch of medical science that pertains to study of anesthetics and their application. */
  Anesthesia: NamedNode<"https://schema.org/Anesthesia">;
  /** Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type. */
  MedicalSpecialty: NamedNode<"https://schema.org/MedicalSpecialty">;
  /** Animal shelter. */
  AnimalShelter: NamedNode<"https://schema.org/AnimalShelter">;
  /** A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc. */
  LocalBusiness: NamedNode<"https://schema.org/LocalBusiness">;
  /** An answer offered to a question; perhaps correct, perhaps opinionated or wrong. */
  Answer: NamedNode<"https://schema.org/Answer">;
  /** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks. */
  Comment: NamedNode<"https://schema.org/Comment">;
  /** An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>). */
  Apartment: NamedNode<"https://schema.org/Apartment">;
  /** Residence type: Apartment complex. */
  ApartmentComplex: NamedNode<"https://schema.org/ApartmentComplex">;
  /** The place where a person lives. */
  Residence: NamedNode<"https://schema.org/Residence">;
  /** Appearance assessment with clinical examination. */
  Appearance: NamedNode<"https://schema.org/Appearance">;
  /** The act of inserting at the end if an ordered collection. */
  AppendAction: NamedNode<"https://schema.org/AppendAction">;
  /** The act of adding at a specific location in an ordered collection. */
  InsertAction: NamedNode<"https://schema.org/InsertAction">;
  /** The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted. */
  ApplyAction: NamedNode<"https://schema.org/ApplyAction">;
  /** An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US. */
  ApprovedIndication: NamedNode<"https://schema.org/ApprovedIndication">;
  /** A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc. */
  MedicalIndication: NamedNode<"https://schema.org/MedicalIndication">;
  /** Aquarium. */
  Aquarium: NamedNode<"https://schema.org/Aquarium">;
  /** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections. */
  ArchiveComponent: NamedNode<"https://schema.org/ArchiveComponent">;
  /** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public. */
  ArchiveOrganization: NamedNode<"https://schema.org/ArchiveOrganization">;
  /** The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants. */
  ArriveAction: NamedNode<"https://schema.org/ArriveAction">;
  /** The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object. */
  MoveAction: NamedNode<"https://schema.org/MoveAction">;
  /** An art gallery. */
  ArtGallery: NamedNode<"https://schema.org/ArtGallery">;
  /** A type of blood vessel that specifically carries blood away from the heart. */
  Artery: NamedNode<"https://schema.org/Artery">;
  /** A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body. */
  Vessel: NamedNode<"https://schema.org/Vessel">;
  /** The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction. */
  AskAction: NamedNode<"https://schema.org/AskAction">;
  /** The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation. */
  CommunicateAction: NamedNode<"https://schema.org/CommunicateAction">;
  /** A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes. */
  AskPublicNewsArticle: NamedNode<"https://schema.org/AskPublicNewsArticle">;
  /** The act of forming one's opinion, reaction or sentiment. */
  AssessAction: NamedNode<"https://schema.org/AssessAction">;
  /** The act of allocating an action/event/task to some destination (someone or something). */
  AssignAction: NamedNode<"https://schema.org/AssignAction">;
  /** A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject. */
  Atlas: NamedNode<"https://schema.org/Atlas">;
  /** Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous. */
  Attorney: NamedNode<"https://schema.org/Attorney">;
  /** A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s). */
  LegalService: NamedNode<"https://schema.org/LegalService">;
  /** Intended audience for an item, i.e. the group for whom the item was created. */
  Audience: NamedNode<"https://schema.org/Audience">;
  /** An audio file. */
  AudioObject: NamedNode<"https://schema.org/AudioObject">;
  /** A specific and exact (byte-for-byte) version of an [[AudioObject]]. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
  AudioObjectSnapshot: NamedNode<"https://schema.org/AudioObjectSnapshot">;
  /** An audiobook. */
  Audiobook: NamedNode<"https://schema.org/Audiobook">;
  /** A book. */
  Book: NamedNode<"https://schema.org/Book">;
  /** Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties. */
  AudiobookFormat: NamedNode<"https://schema.org/AudiobookFormat">;
  /** The publication format of the book. */
  BookFormatType: NamedNode<"https://schema.org/BookFormatType">;
  /** Indicates that the publisher gives some special status to the publication of the document. ("The Queens Printer" version of a UK Act of Parliament, or the PDF version of a Directive published by the EU Office of Publications.) Something "Authoritative" is considered to be also [[OfficialLegalValue]]. */
  AuthoritativeLegalValue: NamedNode<
    "http://schema.org/AuthoritativeLegalValue"
  >;
  /** A list of possible levels for the legal validity of a legislation. */
  LegalValueLevel: NamedNode<"https://schema.org/LegalValueLevel">;
  /** The act of granting permission to an object. */
  AuthorizeAction: NamedNode<"https://schema.org/AuthorizeAction">;
  /** Auto body shop. */
  AutoBodyShop: NamedNode<"https://schema.org/AutoBodyShop">;
  /** Car repair, sales, or parts. */
  AutomotiveBusiness: NamedNode<"https://schema.org/AutomotiveBusiness">;
  /** An car dealership. */
  AutoDealer: NamedNode<"https://schema.org/AutoDealer">;
  /** An auto parts store. */
  AutoPartsStore: NamedNode<"https://schema.org/AutoPartsStore">;
  /** A retail good store. */
  Store: NamedNode<"https://schema.org/Store">;
  /** A car rental business. */
  AutoRental: NamedNode<"https://schema.org/AutoRental">;
  /** Car repair business. */
  AutoRepair: NamedNode<"https://schema.org/AutoRepair">;
  /** A car wash business. */
  AutoWash: NamedNode<"https://schema.org/AutoWash">;
  /** ATM/cash machine. */
  AutomatedTeller: NamedNode<"https://schema.org/AutomatedTeller">;
  /** A system of medicine that originated in India over thousands of years and that focuses on integrating and balancing the body, mind, and spirit. */
  Ayurvedic: NamedNode<"https://schema.org/Ayurvedic">;
  /** Systems of medical practice. */
  MedicineSystem: NamedNode<"https://schema.org/MedicineSystem">;
  /** Indicates that the item is available on back order. */
  BackOrder: NamedNode<"https://schema.org/BackOrder">;
  /** A list of possible product availability options. */
  ItemAvailability: NamedNode<"https://schema.org/ItemAvailability">;
  /** A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ([FAQ](https://en.wikipedia.org/wiki/FAQ)) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using [[Book]] or [[Article]], in particular [[ScholarlyArticle]]. See also [[NewsArticle]] for related vocabulary from a learning/education perspective. */
  BackgroundNewsArticle: NamedNode<"https://schema.org/BackgroundNewsArticle">;
  /** Pathogenic bacteria that cause bacterial infection. */
  Bacteria: NamedNode<"https://schema.org/Bacteria">;
  /** Classes of agents or pathogens that transmit infectious diseases. Enumerated type. */
  InfectiousAgentClass: NamedNode<"https://schema.org/InfectiousAgentClass">;
  /** A bakery. */
  Bakery: NamedNode<"https://schema.org/Bakery">;
  /** A food-related business. */
  FoodEstablishment: NamedNode<"https://schema.org/FoodEstablishment">;
  /** Physical activity that is engaged to help maintain posture and balance. */
  Balance: NamedNode<"https://schema.org/Balance">;
  /** A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest. */
  BankAccount: NamedNode<"https://schema.org/BankAccount">;
  /** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry. */
  FinancialProduct: NamedNode<"https://schema.org/FinancialProduct">;
  /** Bank or credit union. */
  BankOrCreditUnion: NamedNode<"https://schema.org/BankOrCreditUnion">;
  /** A bar or pub. */
  BarOrPub: NamedNode<"https://schema.org/BarOrPub">;
  /** An image of a visual machine-readable code such as a barcode or QR code. */
  Barcode: NamedNode<"https://schema.org/Barcode">;
  /** An image file. */
  ImageObject: NamedNode<"https://schema.org/ImageObject">;
  /** BasicIncome: this is a benefit for basic income. */
  BasicIncome: NamedNode<"https://schema.org/BasicIncome">;
  /** GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered. */
  GovernmentBenefitsType: NamedNode<
    "https://schema.org/GovernmentBenefitsType"
  >;
  /** Beach. */
  Beach: NamedNode<"https://schema.org/Beach">;
  /** Beauty salon. */
  BeautySalon: NamedNode<"https://schema.org/BeautySalon">;
  /** Health and beauty. */
  HealthAndBeautyBusiness: NamedNode<
    "http://schema.org/HealthAndBeautyBusiness"
  >;
  /**
   * Bed and breakfast.
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  BedAndBreakfast: NamedNode<"https://schema.org/BedAndBreakfast">;
  /** A lodging business, such as a motel, hotel, or inn. */
  LodgingBusiness: NamedNode<"https://schema.org/LodgingBusiness">;
  /** An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development). */
  BedDetails: NamedNode<"https://schema.org/BedDetails">;
  /** A type of bed. This is used for indicating the bed or beds available in an accommodation. */
  BedType: NamedNode<"https://schema.org/BedType">;
  /** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'. */
  QualitativeValue: NamedNode<"https://schema.org/QualitativeValue">;
  /** The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal. */
  BefriendAction: NamedNode<"https://schema.org/BefriendAction">;
  /** The act of interacting with another person or organization. */
  InteractAction: NamedNode<"https://schema.org/InteractAction">;
  /** Content about the benefits and advantages of usage or utilization of topic. */
  BenefitsHealthAspect: NamedNode<"https://schema.org/BenefitsHealthAspect">;
  /** A bike store. */
  BikeStore: NamedNode<"https://schema.org/BikeStore">;
  /** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical. */
  BioChemEntity: NamedNode<"https://schema.org/BioChemEntity">;
  /** A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosting]]s) in a [[Blog]] are often colloquially referred to by the same term. */
  Blog: NamedNode<"https://schema.org/Blog">;
  /** A blog post. */
  BlogPosting: NamedNode<"https://schema.org/BlogPosting">;
  /** A post to a social media platform, including blog posts, tweets, Facebook posts, etc. */
  SocialMediaPosting: NamedNode<"https://schema.org/SocialMediaPosting">;
  /** A medical test performed on a sample of a patient's blood. */
  BloodTest: NamedNode<"https://schema.org/BloodTest">;
  /** Any medical test, typically performed for diagnostic purposes. */
  MedicalTest: NamedNode<"https://schema.org/MedicalTest">;
  /** A type of boarding policy used by an airline. */
  BoardingPolicyType: NamedNode<"https://schema.org/BoardingPolicyType">;
  /**
   * A reservation for boat travel.
   *
   * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
   */
  BoatReservation: NamedNode<"https://schema.org/BoatReservation">;
  /** Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]]. */
  Reservation: NamedNode<"https://schema.org/Reservation">;
  /** A terminal for boats, ships, and other water vessels. */
  BoatTerminal: NamedNode<"https://schema.org/BoatTerminal">;
  /** A trip on a commercial ferry line. */
  BoatTrip: NamedNode<"https://schema.org/BoatTrip">;
  /** A trip or journey. An itinerary of visits to one or more places. */
  Trip: NamedNode<"https://schema.org/Trip">;
  /** Arm length (measured between arms/shoulder line intersection and the prominent wrist bone). Used, for example, to fit shirts. */
  BodyMeasurementArm: NamedNode<"https://schema.org/BodyMeasurementArm">;
  /** Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes. */
  BodyMeasurementTypeEnumeration: NamedNode<
    "http://schema.org/BodyMeasurementTypeEnumeration"
  >;
  /** Maximum girth of bust. Used, for example, to fit women's suits. */
  BodyMeasurementBust: NamedNode<"https://schema.org/BodyMeasurementBust">;
  /** Maximum girth of chest. Used, for example, to fit men's suits. */
  BodyMeasurementChest: NamedNode<"https://schema.org/BodyMeasurementChest">;
  /** Foot length (measured between end of the most prominent toe and the most prominent part of the heel). Used, for example, to measure socks. */
  BodyMeasurementFoot: NamedNode<"https://schema.org/BodyMeasurementFoot">;
  /** Maximum hand girth (measured over the knuckles of the open right hand excluding thumb, fingers together). Used, for example, to fit gloves. */
  BodyMeasurementHand: NamedNode<"https://schema.org/BodyMeasurementHand">;
  /** Maximum girth of head above the ears. Used, for example, to fit hats. */
  BodyMeasurementHead: NamedNode<"https://schema.org/BodyMeasurementHead">;
  /** Body height (measured between crown of head and soles of feet). Used, for example, to fit jackets. */
  BodyMeasurementHeight: NamedNode<"https://schema.org/BodyMeasurementHeight">;
  /** Girth of hips (measured around the buttocks). Used, for example, to fit skirts. */
  BodyMeasurementHips: NamedNode<"https://schema.org/BodyMeasurementHips">;
  /** Inside leg (measured between crotch and soles of feet). Used, for example, to fit pants. */
  BodyMeasurementInsideLeg: NamedNode<
    "http://schema.org/BodyMeasurementInsideLeg"
  >;
  /** Girth of neck. Used, for example, to fit shirts. */
  BodyMeasurementNeck: NamedNode<"https://schema.org/BodyMeasurementNeck">;
  /** Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles. */
  MeasurementTypeEnumeration: NamedNode<
    "http://schema.org/MeasurementTypeEnumeration"
  >;
  /** Girth of body just below the bust. Used, for example, to fit women's swimwear. */
  BodyMeasurementUnderbust: NamedNode<
    "http://schema.org/BodyMeasurementUnderbust"
  >;
  /** Girth of natural waistline (between hip bones and lower ribs). Used, for example, to fit pants. */
  BodyMeasurementWaist: NamedNode<"https://schema.org/BodyMeasurementWaist">;
  /** Body weight. Used, for example, to measure pantyhose. */
  BodyMeasurementWeight: NamedNode<"https://schema.org/BodyMeasurementWeight">;
  /** A body of water, such as a sea, ocean, or lake. */
  BodyOfWater: NamedNode<"https://schema.org/BodyOfWater">;
  /** A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins. */
  Landform: NamedNode<"https://schema.org/Landform">;
  /** Rigid connective tissue that comprises up the skeletal structure of the human body. */
  Bone: NamedNode<"https://schema.org/Bone">;
  /** A series of books. Included books can be indicated with the hasPart property. */
  BookSeries: NamedNode<"https://schema.org/BookSeries">;
  /**
   * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as TV, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
   *
   */
  CreativeWorkSeries: NamedNode<"https://schema.org/CreativeWorkSeries">;
  /** A bookstore. */
  BookStore: NamedNode<"https://schema.org/BookStore">;
  /** An agent bookmarks/flags/labels/tags/marks an object. */
  BookmarkAction: NamedNode<"https://schema.org/BookmarkAction">;
  /** Boolean: True or False. */
  Boolean: NamedNode<"https://schema.org/Boolean">;
  /** The basic data types such as Integers, Strings, etc. */
  DataType: NamedNode<"https://schema.org/DataType">;
  /** The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction. */
  BorrowAction: NamedNode<"https://schema.org/BorrowAction">;
  /** The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another. */
  TransferAction: NamedNode<"https://schema.org/TransferAction">;
  /** A bowling alley. */
  BowlingAlley: NamedNode<"https://schema.org/BowlingAlley">;
  /** A sports location, such as a playing field. */
  SportsActivityLocation: NamedNode<
    "https://schema.org/SportsActivityLocation"
  >;
  /** Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity. */
  BrainStructure: NamedNode<"https://schema.org/BrainStructure">;
  /** A brand is a name used by an organization or business person for labeling a product, product group, or similar. */
  Brand: NamedNode<"https://schema.org/Brand">;
  /**
   * A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.\n\nThe [[position]] property is used to reconstruct the order of the items in a BreadcrumbList. The convention is that a breadcrumb list has an [[itemListOrder]] of [[ItemListOrderAscending]] (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
   *
   */
  BreadcrumbList: NamedNode<"https://schema.org/BreadcrumbList">;
  /** A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting. */
  ItemList: NamedNode<"https://schema.org/ItemList">;
  /** Brewery. */
  Brewery: NamedNode<"https://schema.org/Brewery">;
  /** A bridge. */
  Bridge: NamedNode<"https://schema.org/Bridge">;
  /** A unique instance of a BroadcastService on a CableOrSatelliteService lineup. */
  BroadcastChannel: NamedNode<"https://schema.org/BroadcastChannel">;
  /** An over the air or online broadcast event. */
  BroadcastEvent: NamedNode<"https://schema.org/BroadcastEvent">;
  /** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type, e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media. */
  PublicationEvent: NamedNode<"https://schema.org/PublicationEvent">;
  /** The frequency in MHz and the modulation used for a particular BroadcastService. */
  BroadcastFrequencySpecification: NamedNode<
    "http://schema.org/BroadcastFrequencySpecification"
  >;
  /** BroadcastRelease. */
  BroadcastRelease: NamedNode<"https://schema.org/BroadcastRelease">;
  /** A delivery service through which content is provided via broadcast over the air or online. */
  BroadcastService: NamedNode<"https://schema.org/BroadcastService">;
  /** A service provided by an organization, e.g. delivery service, print services, etc. */
  Service: NamedNode<"https://schema.org/Service">;
  /** An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm. */
  BrokerageAccount: NamedNode<"https://schema.org/BrokerageAccount">;
  /** A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return. */
  InvestmentOrDeposit: NamedNode<"https://schema.org/InvestmentOrDeposit">;
  /** A Buddhist temple. */
  BuddhistTemple: NamedNode<"https://schema.org/BuddhistTemple">;
  /** Place of worship, such as a church, synagogue, or mosque. */
  PlaceOfWorship: NamedNode<"https://schema.org/PlaceOfWorship">;
  /** A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel. */
  BusOrCoach: NamedNode<"https://schema.org/BusOrCoach">;
  /** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space. */
  Vehicle: NamedNode<"https://schema.org/Vehicle">;
  /** A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
  BusReservation: NamedNode<"https://schema.org/BusReservation">;
  /** A bus station. */
  BusStation: NamedNode<"https://schema.org/BusStation">;
  /** A bus stop. */
  BusStop: NamedNode<"https://schema.org/BusStop">;
  /** A trip on a commercial bus line. */
  BusTrip: NamedNode<"https://schema.org/BusTrip">;
  /** A set of characteristics belonging to businesses, e.g. who compose an item's target audience. */
  BusinessAudience: NamedNode<"https://schema.org/BusinessAudience">;
  /**
   * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller
   *
   */
  BusinessEntityType: NamedNode<"https://schema.org/BusinessEntityType">;
  /** Event type: Business event. */
  BusinessEvent: NamedNode<"https://schema.org/BusinessEvent">;
  /** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects. */
  Event: NamedNode<"https://schema.org/Event">;
  /**
   * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy
   *
   */
  BusinessFunction: NamedNode<"https://schema.org/BusinessFunction">;
  /** BusinessSupport: this is a benefit for supporting businesses. */
  BusinessSupport: NamedNode<"https://schema.org/BusinessSupport">;
  /** The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction. */
  BuyAction: NamedNode<"https://schema.org/BuyAction">;
  /** The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment. */
  TradeAction: NamedNode<"https://schema.org/TradeAction">;
  /**
   * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
   *       used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
   *       definitions used as the source here.
   *
   */
  CDCPMDRecord: NamedNode<"https://schema.org/CDCPMDRecord">;
  /** Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing. */
  StructuredValue: NamedNode<"https://schema.org/StructuredValue">;
  /** CDFormat. */
  CDFormat: NamedNode<"https://schema.org/CDFormat">;
  /** Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.). */
  MusicReleaseFormatType: NamedNode<
    "https://schema.org/MusicReleaseFormatType"
  >;
  /** X-ray computed tomography imaging. */
  CT: NamedNode<"https://schema.org/CT">;
  /** Any medical imaging modality typically used for diagnostic purposes. Enumerated type. */
  MedicalImagingTechnique: NamedNode<
    "http://schema.org/MedicalImagingTechnique"
  >;
  /** A service which provides access to media programming like TV or radio. Access may be via cable or satellite. */
  CableOrSatelliteService: NamedNode<
    "http://schema.org/CableOrSatelliteService"
  >;
  /** A cafe or coffee shop. */
  CafeOrCoffeeShop: NamedNode<"https://schema.org/CafeOrCoffeeShop">;
  /**
   * A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing individual [[CampingPitch]] locations. \n\n
   * In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (source: Wikipedia, see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\n
   *
   * See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
   *
   */
  Campground: NamedNode<"https://schema.org/Campground">;
  /**
   * A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or [[Campground]].\n\n
   * In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
   * (Source: Wikipedia, see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite).)\n\n
   * See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
   *
   */
  CampingPitch: NamedNode<"https://schema.org/CampingPitch">;
  /** A canal, like the Panama Canal. */
  Canal: NamedNode<"https://schema.org/Canal">;
  /** The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction. */
  CancelAction: NamedNode<"https://schema.org/CancelAction">;
  /** The act of planning the execution of an event/task/action/reservation/plan to a future date. */
  PlanAction: NamedNode<"https://schema.org/PlanAction">;
  /** A car is a wheeled, self-powered motor vehicle used for transportation. */
  Car: NamedNode<"https://schema.org/Car">;
  /** A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi. */
  CarUsageType: NamedNode<"https://schema.org/CarUsageType">;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of heart and vasculature. */
  Cardiovascular: NamedNode<"https://schema.org/Cardiovascular">;
  /** Cardiovascular system assessment with clinical examination. */
  CardiovascularExam: NamedNode<"https://schema.org/CardiovascularExam">;
  /** A case series (also known as a clinical series) is a medical research study that tracks patients with a known exposure given similar treatment or examines their medical records for exposure and outcome. A case series can be retrospective or prospective and usually involves a smaller number of patients than the more powerful case-control studies or randomized controlled trials. Case series may be consecutive or non-consecutive, depending on whether all cases presenting to the reporting authors over a period of time were included, or only a selection. */
  CaseSeries: NamedNode<"https://schema.org/CaseSeries">;
  /** Design models for observational medical studies. Enumerated type. */
  MedicalObservationalStudyDesign: NamedNode<
    "http://schema.org/MedicalObservationalStudyDesign"
  >;
  /** A casino. */
  Casino: NamedNode<"https://schema.org/Casino">;
  /** CassetteFormat. */
  CassetteFormat: NamedNode<"https://schema.org/CassetteFormat">;
  /** A Category Code. */
  CategoryCode: NamedNode<"https://schema.org/CategoryCode">;
  /** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term. */
  DefinedTerm: NamedNode<"https://schema.org/DefinedTerm">;
  /** A set of Category Code values. */
  CategoryCodeSet: NamedNode<"https://schema.org/CategoryCodeSet">;
  /** A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration. */
  DefinedTermSet: NamedNode<"https://schema.org/DefinedTermSet">;
  /** A Catholic church. */
  CatholicChurch: NamedNode<"https://schema.org/CatholicChurch">;
  /** A church. */
  Church: NamedNode<"https://schema.org/Church">;
  /** Information about the causes and main actions that gave rise to the topic. */
  CausesHealthAspect: NamedNode<"https://schema.org/CausesHealthAspect">;
  /** A graveyard. */
  Cemetery: NamedNode<"https://schema.org/Cemetery">;
  /** One of the sections into which a book is divided. A chapter usually has a section number or a name. */
  Chapter: NamedNode<"https://schema.org/Chapter">;
  /** CharitableIncorporatedOrganization: Non-profit type referring to a Charitable Incorporated Organization (UK). */
  CharitableIncorporatedOrganization: NamedNode<
    "http://schema.org/CharitableIncorporatedOrganization"
  >;
  /** UKNonprofitType: Non-profit organization type originating from the United Kingdom. */
  UKNonprofitType: NamedNode<"https://schema.org/UKNonprofitType">;
  /** An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state. */
  CheckAction: NamedNode<"https://schema.org/CheckAction">;
  /** The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily. */
  FindAction: NamedNode<"https://schema.org/FindAction">;
  /** The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check-in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).\n\nRelated actions:\n\n* [[CheckOutAction]]: The antonym of CheckInAction.\n* [[ArriveAction]]: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.\n* [[ConfirmAction]]: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the *start* of a previously reserved service rather than its validity/existence. */
  CheckInAction: NamedNode<"https://schema.org/CheckInAction">;
  /** The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check-in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service. */
  CheckOutAction: NamedNode<"https://schema.org/CheckOutAction">;
  /** Web page type: Checkout page. */
  CheckoutPage: NamedNode<"https://schema.org/CheckoutPage">;
  /** A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: [ChEBI:59999](https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999)). */
  ChemicalSubstance: NamedNode<"https://schema.org/ChemicalSubstance">;
  /** A Childcare center. */
  ChildCare: NamedNode<"https://schema.org/ChildCare">;
  /** Event type: Children's event. */
  ChildrensEvent: NamedNode<"https://schema.org/ChildrensEvent">;
  /** A system of medicine focused on the relationship between the body's structure, mainly the spine, and its functioning. */
  Chiropractic: NamedNode<"https://schema.org/Chiropractic">;
  /** The act of expressing a preference from a set of options or a large or unbounded set of choices/options. */
  ChooseAction: NamedNode<"https://schema.org/ChooseAction">;
  /** A city or town. */
  City: NamedNode<"https://schema.org/City">;
  /** A city hall. */
  CityHall: NamedNode<"https://schema.org/CityHall">;
  /** A government building. */
  GovernmentBuilding: NamedNode<"https://schema.org/GovernmentBuilding">;
  /**
   * A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
   *
   *   Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].
   *
   *   At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
   *
   */
  Claim: NamedNode<"https://schema.org/Claim">;
  /** A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed). */
  ClaimReview: NamedNode<"https://schema.org/ClaimReview">;
  /** A review of an item - for example, of a restaurant, movie, or store. */
  Review: NamedNode<"https://schema.org/Review">;
  /** A class, also often called a 'Type'; equivalent to rdfs:Class. */
  Class: NamedNode<"https://schema.org/Class">;
  /** Represents the cleaning fee part of the total price for an offered product, for example a vacation rental. */
  CleaningFee: NamedNode<"https://schema.org/CleaningFee">;
  /** Medical clinicians, including practicing physicians and other medical professionals involved in clinical practice. */
  Clinician: NamedNode<"https://schema.org/Clinician">;
  /** Target audiences types for medical web pages. Enumerated type. */
  MedicalAudienceType: NamedNode<"https://schema.org/MedicalAudienceType">;
  /** A short TV or radio program or a segment/part of a program. */
  Clip: NamedNode<"https://schema.org/Clip">;
  /** A clothing store. */
  ClothingStore: NamedNode<"https://schema.org/ClothingStore">;
  /** Play mode: CoOp. Co-operative games, where you play on the same team with friends. */
  CoOp: NamedNode<"https://schema.org/CoOp">;
  /** Indicates whether this game is multi-player, co-op or single-player. */
  GamePlayMode: NamedNode<"https://schema.org/GamePlayMode">;
  /** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
  Code: NamedNode<"https://schema.org/Code">;
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
  supersededBy: NamedNode<"https://schema.org/supersededBy">;
  /** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
  SoftwareSourceCode: NamedNode<"https://schema.org/SoftwareSourceCode">;
  /** Also known as a panel study. A cohort study is a form of longitudinal study used in medicine and social science. It is one type of study design and should be compared with a cross-sectional study.  A cohort is a group of people who share a common characteristic or experience within a defined period (e.g., are born, leave school, lose their job, are exposed to a drug or a vaccine, etc.). The comparison group may be the general population from which the cohort is drawn, or it may be another cohort of persons thought to have had little or no exposure to the substance under investigation, but otherwise similar. Alternatively, subgroups within the cohort may be compared with each other. */
  CohortStudy: NamedNode<"https://schema.org/CohortStudy">;
  /** A collection of items, e.g. creative works or products. */
  Collection: NamedNode<"https://schema.org/Collection">;
  /** Web page type: Collection page. */
  CollectionPage: NamedNode<"https://schema.org/CollectionPage">;
  /** A college, university, or other third-level educational institution. */
  CollegeOrUniversity: NamedNode<"https://schema.org/CollegeOrUniversity">;
  /** An educational organization. */
  EducationalOrganization: NamedNode<
    "http://schema.org/EducationalOrganization"
  >;
  /** A comedy club. */
  ComedyClub: NamedNode<"https://schema.org/ComedyClub">;
  /** Event type: Comedy event. */
  ComedyEvent: NamedNode<"https://schema.org/ComedyEvent">;
  /** The artwork on the cover of a comic. */
  ComicCoverArt: NamedNode<"https://schema.org/ComicCoverArt">;
  /**
   * The term "story" is any indivisible, re-printable
   *     	unit of a comic, including the interior stories, covers, and backmatter. Most
   *     	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
   */
  ComicStory: NamedNode<"https://schema.org/ComicStory">;
  /** The artwork on the outer surface of a CreativeWork. */
  CoverArt: NamedNode<"https://schema.org/CoverArt">;
  /**
   * Individual comic issues are serially published as
   *     	part of a larger series. For the sake of consistency, even one-shot issues
   *     	belong to a series comprised of a single issue. All comic issues can be
   *     	uniquely identified by: the combination of the name and volume number of the
   *     	series to which the issue belongs; the issue number; and the variant
   *     	description of the issue (if any).
   */
  ComicIssue: NamedNode<"https://schema.org/ComicIssue">;
  /** A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
  PublicationIssue: NamedNode<"https://schema.org/PublicationIssue">;
  /**
   * A sequential publication of comic stories under a
   *     	unifying title, for example "The Amazing Spider-Man" or "Groo the
   *     	Wanderer".
   */
  ComicSeries: NamedNode<"https://schema.org/ComicSeries">;
  /** A publication in any medium issued in successive parts bearing numerical or chronological designations and intended to continue indefinitely, such as a magazine, scholarly journal, or newspaper.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
  Periodical: NamedNode<"https://schema.org/Periodical">;
  /** The act of generating a comment about a subject. */
  CommentAction: NamedNode<"https://schema.org/CommentAction">;
  /** Permission to add comments to the document. */
  CommentPermission: NamedNode<"https://schema.org/CommentPermission">;
  /** A type of permission which can be granted for accessing a digital document. */
  DigitalDocumentPermissionType: NamedNode<
    "http://schema.org/DigitalDocumentPermissionType"
  >;
  /** A field of public health focusing on improving health characteristics of a defined population in relation with their geographical or environment areas. */
  CommunityHealth: NamedNode<"https://schema.org/CommunityHealth">;
  /** A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include different businesses run by health professionals. */
  MedicalBusiness: NamedNode<"https://schema.org/MedicalBusiness">;
  /** CompilationAlbum. */
  CompilationAlbum: NamedNode<"https://schema.org/CompilationAlbum">;
  /** Classification of the album by its type of content: soundtrack, live album, studio album, etc. */
  MusicAlbumProductionType: NamedNode<
    "http://schema.org/MusicAlbumProductionType"
  >;
  /**
   * A [[CompleteDataFeed]] is a [[DataFeed]] whose standard representation includes content for every item currently in the feed.
   *
   * This is the equivalent of Atom's element as defined in Feed Paging and Archiving [RFC 5005](https://tools.ietf.org/html/rfc5005), for example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.
   */
  CompleteDataFeed: NamedNode<"https://schema.org/CompleteDataFeed">;
  /** A single feed providing structured information about one or more entities or topics. */
  DataFeed: NamedNode<"https://schema.org/DataFeed">;
  /** Completed. */
  Completed: NamedNode<"https://schema.org/Completed">;
  /** An action that has already taken place. */
  CompletedActionStatus: NamedNode<"https://schema.org/CompletedActionStatus">;
  /** A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning"). */
  CompoundPriceSpecification: NamedNode<
    "http://schema.org/CompoundPriceSpecification"
  >;
  /** A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc. */
  PriceSpecification: NamedNode<"https://schema.org/PriceSpecification">;
  /** This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type. */
  ComputerLanguage: NamedNode<"https://schema.org/ComputerLanguage">;
  /** A computer store. */
  ComputerStore: NamedNode<"https://schema.org/ComputerStore">;
  /** The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction. */
  ConfirmAction: NamedNode<"https://schema.org/ConfirmAction">;
  /** The act of notifying someone of information pertinent to them, with no expectation of a response. */
  InformAction: NamedNode<"https://schema.org/InformAction">;
  /** A Consortium is a membership [[Organization]] whose members are typically Organizations. */
  Consortium: NamedNode<"https://schema.org/Consortium">;
  /** The act of ingesting information/resources/food. */
  ConsumeAction: NamedNode<"https://schema.org/ConsumeAction">;
  /** Web page type: Contact page. */
  ContactPage: NamedNode<"https://schema.org/ContactPage">;
  /** A contact point&#x2014;for example, a Customer Complaints department. */
  ContactPoint: NamedNode<"https://schema.org/ContactPoint">;
  /** Enumerated options related to a ContactPoint. */
  ContactPointOption: NamedNode<"https://schema.org/ContactPointOption">;
  /** Content about contagion mechanisms and contagiousness information over the topic. */
  ContagiousnessHealthAspect: NamedNode<
    "http://schema.org/ContagiousnessHealthAspect"
  >;
  /** One of the continents (for example, Europe or Africa). */
  Continent: NamedNode<"https://schema.org/Continent">;
  /** A convenience store. */
  ConvenienceStore: NamedNode<"https://schema.org/ConvenienceStore">;
  /** One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties. */
  Conversation: NamedNode<"https://schema.org/Conversation">;
  /** The act of producing/preparing food. */
  CookAction: NamedNode<"https://schema.org/CookAction">;
  /** The act of deliberately creating/producing/generating/building a result out of the agent. */
  CreateAction: NamedNode<"https://schema.org/CreateAction">;
  /** Organization: A business corporation. */
  Corporation: NamedNode<"https://schema.org/Corporation">;
  /** A [[comment]] that corrects [[CreativeWork]]. */
  CorrectionComment: NamedNode<"https://schema.org/CorrectionComment">;
  /** A country. */
  Country: NamedNode<"https://schema.org/Country">;
  /** A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners. */
  Course: NamedNode<"https://schema.org/Course">;
  /**
   * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
   *
   * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
   *
   * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
   */
  LearningResource: NamedNode<"https://schema.org/LearningResource">;
  /** An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students. */
  CourseInstance: NamedNode<"https://schema.org/CourseInstance">;
  /** A courthouse. */
  Courthouse: NamedNode<"https://schema.org/Courthouse">;
  /** A work of art that is primarily visual in character. */
  VisualArtwork: NamedNode<"https://schema.org/VisualArtwork">;
  /**
   * A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus
   *       disease is available. If the facility is being made available from an established [[Pharmacy]], [[Hotel]], or other
   *       non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information
   *       about that place, e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable.
   *
   */
  CovidTestingFacility: NamedNode<"https://schema.org/CovidTestingFacility">;
  /** A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well. */
  MedicalClinic: NamedNode<"https://schema.org/MedicalClinic">;
  /** A media season, e.g. TV, radio, video game etc. */
  CreativeWorkSeason: NamedNode<"https://schema.org/CreativeWorkSeason">;
  /** A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]]. */
  Series: NamedNode<"https://schema.org/Series">;
  /**
   * A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
   *
   */
  CreditCard: NamedNode<"https://schema.org/CreditCard">;
  /** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges. */
  LoanOrCredit: NamedNode<"https://schema.org/LoanOrCredit">;
  /** A payment method using a credit, debit, store or other card to associate the payment with an account. */
  PaymentCard: NamedNode<"https://schema.org/PaymentCard">;
  /** A crematorium. */
  Crematorium: NamedNode<"https://schema.org/Crematorium">;
  /** A [[CriticReview]] is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. [[CriticReview]]s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the [[UserReview]] type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources. */
  CriticReview: NamedNode<"https://schema.org/CriticReview">;
  /** Studies carried out on pre-existing data (usually from 'snapshot' surveys), such as that collected by the Census Bureau. Sometimes called Prevalence Studies. */
  CrossSectional: NamedNode<"https://schema.org/CrossSectional">;
  /** Text representing a CSS selector. */
  CssSelectorType: NamedNode<"https://schema.org/CssSelectorType">;
  /** Data type: Text. */
  Text: NamedNode<"https://schema.org/Text">;
  /** A service to convert funds from one currency to another currency. */
  CurrencyConversionService: NamedNode<
    "http://schema.org/CurrencyConversionService"
  >;
  /** An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it. */
  DDxElement: NamedNode<"https://schema.org/DDxElement">;
  /** A utility class that serves as the umbrella for a number of 'intangible' things in the medical space. */
  MedicalIntangible: NamedNode<"https://schema.org/MedicalIntangible">;
  /** DJMixAlbum. */
  DJMixAlbum: NamedNode<"https://schema.org/DJMixAlbum">;
  /** DVDFormat. */
  DVDFormat: NamedNode<"https://schema.org/DVDFormat">;
  /** Indicates that the item is damaged. */
  DamagedCondition: NamedNode<"https://schema.org/DamagedCondition">;
  /** A list of possible conditions for the item. */
  OfferItemCondition: NamedNode<"https://schema.org/OfferItemCondition">;
  /** Event type: A social dance. */
  DanceEvent: NamedNode<"https://schema.org/DanceEvent">;
  /** A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance. */
  DanceGroup: NamedNode<"https://schema.org/DanceGroup">;
  /** A performance group, such as a band, an orchestra, or a circus. */
  PerformingGroup: NamedNode<"https://schema.org/PerformingGroup">;
  /** The item is dangerous and requires careful handling and/or special training of the user. See also the [UN Model Classification](https://unece.org/DAM/trans/danger/publi/unrec/rev17/English/02EREv17_Part2.pdf) defining the 9 classes of dangerous goods such as explosives, gases, flammables, and more. */
  DangerousGoodConsideration: NamedNode<
    "http://schema.org/DangerousGoodConsideration"
  >;
  /** A collection of datasets. */
  DataCatalog: NamedNode<"https://schema.org/DataCatalog">;
  /** All or part of a [[Dataset]] in downloadable form. */
  DataDownload: NamedNode<"https://schema.org/DataDownload">;
  /** A body of structured information describing some topic(s) of interest. */
  Dataset: NamedNode<"https://schema.org/Dataset">;
  /** A single item within a larger data feed. */
  DataFeedItem: NamedNode<"https://schema.org/DataFeedItem">;
  /** A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  Date: NamedNode<"https://schema.org/Date">;
  /** A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601). */
  DateTime: NamedNode<"https://schema.org/DateTime">;
  /** A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]], use of that type is recommended. */
  DatedMoneySpecification: NamedNode<
    "http://schema.org/DatedMoneySpecification"
  >;
  /** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc. */
  MonetaryAmount: NamedNode<"https://schema.org/MonetaryAmount">;
  /**
   * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
   *
   * Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
   *
   */
  DayOfWeek: NamedNode<"https://schema.org/DayOfWeek">;
  /** A day spa. */
  DaySpa: NamedNode<"https://schema.org/DaySpa">;
  /** The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight). */
  DeactivateAction: NamedNode<"https://schema.org/DeactivateAction">;
  /**
   * Content coded 'missing context' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'missing context': Presenting unaltered video in an inaccurate manner that misrepresents the footage. For example, using incorrect dates or locations, altering the transcript or sharing brief clips from a longer video to mislead viewers. (A video rated 'original' can also be missing context.)
   *
   * For an [[ImageObject]] to be 'missing context': Presenting unaltered images in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An image rated 'original' can also be missing context.)
   *
   * For an [[ImageObject]] with embedded text to be 'missing context': An unaltered image presented in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An 'original' image with inaccurate text would generally fall in this category.)
   *
   * For an [[AudioObject]] to be 'missing context': Unaltered audio presented in an inaccurate manner that misrepresents it. For example, using incorrect dates or locations, or sharing brief clips from a longer recording to mislead viewers. (Audio rated “original” can also be missing context.)
   *
   */
  DecontextualizedContent: NamedNode<
    "http://schema.org/DecontextualizedContent"
  >;
  /**  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context. */
  MediaManipulationRatingEnumeration: NamedNode<
    "http://schema.org/MediaManipulationRatingEnumeration"
  >;
  /** A defence establishment, such as an army or navy base. */
  DefenceEstablishment: NamedNode<"https://schema.org/DefenceEstablishment">;
  /**
   * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
   *
   * Examples: a delivery destination when shopping. Region where regional pricing is configured.
   *
   * Requirement 1:
   * Country: US
   * States: "NY", "CA"
   *
   * Requirement 2:
   * Country: US
   * PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
   * { [12345, 12345], [78945, 78945], }
   * Region = state, canton, prefecture, autonomous community...
   *
   */
  DefinedRegion: NamedNode<"https://schema.org/DefinedRegion">;
  /**
   * Indicates a document for which the text is conclusively what the law says and is legally binding. (E.g. the digitally signed version of an Official Journal.)
   *   Something "Definitive" is considered to be also [[AuthoritativeLegalValue]].
   */
  DefinitiveLegalValue: NamedNode<"https://schema.org/DefinitiveLegalValue">;
  /** The act of editing a recipient by removing one of its objects. */
  DeleteAction: NamedNode<"https://schema.org/DeleteAction">;
  /** The price for the delivery of an offer using a particular delivery method. */
  DeliveryChargeSpecification: NamedNode<
    "http://schema.org/DeliveryChargeSpecification"
  >;
  /** An event involving the delivery of an item. */
  DeliveryEvent: NamedNode<"https://schema.org/DeliveryEvent">;
  /**
   * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\n* http://purl.org/goodrelations/v1#DeliveryModeMail\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
   *
   */
  DeliveryMethod: NamedNode<"https://schema.org/DeliveryMethod">;
  /** A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]]. */
  DeliveryTimeSettings: NamedNode<"https://schema.org/DeliveryTimeSettings">;
  /** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply. */
  Demand: NamedNode<"https://schema.org/Demand">;
  /** DemoAlbum. */
  DemoAlbum: NamedNode<"https://schema.org/DemoAlbum">;
  /** Indicates demo game availability, i.e. a somehow limited demonstration of the full game. */
  DemoGameAvailability: NamedNode<"https://schema.org/DemoGameAvailability">;
  /** For a [[VideoGame]], such as used with a [[PlayGameAction]], an enumeration of the kind of game availability offered. */
  GameAvailabilityEnumeration: NamedNode<
    "http://schema.org/GameAvailabilityEnumeration"
  >;
  /** A dentist. */
  Dentist: NamedNode<"https://schema.org/Dentist">;
  /** A medical organization (physical or not), such as hospital, institution or clinic. */
  MedicalOrganization: NamedNode<"https://schema.org/MedicalOrganization">;
  /** A branch of medicine that is involved in the dental care. */
  Dentistry: NamedNode<"https://schema.org/Dentistry">;
  /** The act of  departing from a place. An agent departs from a fromLocation for a destination, optionally with participants. */
  DepartAction: NamedNode<"https://schema.org/DepartAction">;
  /** A department store. */
  DepartmentStore: NamedNode<"https://schema.org/DepartmentStore">;
  /** A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits. */
  DepositAccount: NamedNode<"https://schema.org/DepositAccount">;
  /** Something relating to or practicing dermatology. */
  Dermatologic: NamedNode<"https://schema.org/Dermatologic">;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of skin. */
  Dermatology: NamedNode<"https://schema.org/Dermatology">;
  /** Represents the broad notion of 'desktop' browsers as a Web Platform. */
  DesktopWebPlatform: NamedNode<"https://schema.org/DesktopWebPlatform">;
  /** A diet appropriate for people with diabetes. */
  DiabeticDiet: NamedNode<"https://schema.org/DiabeticDiet">;
  /** A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. */
  RestrictedDiet: NamedNode<"https://schema.org/RestrictedDiet">;
  /** A medical device used for diagnostic purposes. */
  Diagnostic: NamedNode<"https://schema.org/Diagnostic">;
  /** Categories of medical devices, organized by the purpose or intended use of the device. */
  MedicalDevicePurpose: NamedNode<"https://schema.org/MedicalDevicePurpose">;
  /** A medical laboratory that offers on-site or off-site diagnostic services. */
  DiagnosticLab: NamedNode<"https://schema.org/DiagnosticLab">;
  /** A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes. */
  DiagnosticProcedure: NamedNode<"https://schema.org/DiagnosticProcedure">;
  /** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques. */
  MedicalProcedure: NamedNode<"https://schema.org/MedicalProcedure">;
  /** A strategy of regulating the intake of food to achieve or maintain a specific health-related goal. */
  Diet: NamedNode<"https://schema.org/Diet">;
  /** A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition. */
  LifestyleModification: NamedNode<"https://schema.org/LifestyleModification">;
  /** Dietetics and nutrition as a medical specialty. */
  DietNutrition: NamedNode<"https://schema.org/DietNutrition">;
  /** A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites. */
  DietarySupplement: NamedNode<"https://schema.org/DietarySupplement">;
  /** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online. */
  Product: NamedNode<"https://schema.org/Product">;
  /** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. */
  Substance: NamedNode<"https://schema.org/Substance">;
  /** DigitalAudioTapeFormat. */
  DigitalAudioTapeFormat: NamedNode<
    "https://schema.org/DigitalAudioTapeFormat"
  >;
  /** An electronic file or document. */
  DigitalDocument: NamedNode<"https://schema.org/DigitalDocument">;
  /** A permission for a particular person or group to access a particular file. */
  DigitalDocumentPermission: NamedNode<
    "http://schema.org/DigitalDocumentPermission"
  >;
  /** DigitalFormat. */
  DigitalFormat: NamedNode<"https://schema.org/DigitalFormat">;
  /** DisabilitySupport: this is a benefit for disability support. */
  DisabilitySupport: NamedNode<"https://schema.org/DisabilitySupport">;
  /** The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants. */
  DisagreeAction: NamedNode<"https://schema.org/DisagreeAction">;
  /** Indicates that the item has been discontinued. */
  Discontinued: NamedNode<"https://schema.org/Discontinued">;
  /** The act of discovering/finding an object. */
  DiscoverAction: NamedNode<"https://schema.org/DiscoverAction">;
  /** A posting to a discussion forum. */
  DiscussionForumPosting: NamedNode<
    "https://schema.org/DiscussionForumPosting"
  >;
  /** The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants. */
  DislikeAction: NamedNode<"https://schema.org/DislikeAction">;
  /** Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'. */
  Distance: NamedNode<"https://schema.org/Distance">;
  /** Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 kg' or '4 milligrams'. */
  Quantity: NamedNode<"https://schema.org/Quantity">;
  /** Represents the distance fee (e.g., price per km or mile) part of the total price for an offered product, for example a car rental. */
  DistanceFee: NamedNode<"https://schema.org/DistanceFee">;
  /** A distillery. */
  Distillery: NamedNode<"https://schema.org/Distillery">;
  /** The act of providing goods, services, or money without compensation, often for philanthropic reasons. */
  DonateAction: NamedNode<"https://schema.org/DonateAction">;
  /** A specific dosing schedule for a drug or supplement. */
  DoseSchedule: NamedNode<"https://schema.org/DoseSchedule">;
  /** A trial design in which neither the researcher nor the patient knows the details of the treatment the patient was randomly assigned to. */
  DoubleBlindedTrial: NamedNode<"https://schema.org/DoubleBlindedTrial">;
  /** Design models for medical trials. Enumerated type. */
  MedicalTrialDesign: NamedNode<"https://schema.org/MedicalTrialDesign">;
  /** The act of downloading an object. */
  DownloadAction: NamedNode<"https://schema.org/DownloadAction">;
  /** Represents the downpayment (up-front payment) price component of the total price for an offered product that has additional installment payments. */
  Downpayment: NamedNode<"https://schema.org/Downpayment">;
  /** The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments. */
  DrawAction: NamedNode<"https://schema.org/DrawAction">;
  /** A picture or diagram made with a pencil, pen, or crayon rather than paint. */
  Drawing: NamedNode<"https://schema.org/Drawing">;
  /** The act of swallowing liquids. */
  DrinkAction: NamedNode<"https://schema.org/DrinkAction">;
  /** Indicates the usage of the vehicle for driving school. */
  DrivingSchoolVehicleUsage: NamedNode<
    "http://schema.org/DrivingSchoolVehicleUsage"
  >;
  /** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them. */
  Drug: NamedNode<"https://schema.org/Drug">;
  /** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc. */
  DrugClass: NamedNode<"https://schema.org/DrugClass">;
  /** The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup. */
  DrugCost: NamedNode<"https://schema.org/DrugCost">;
  /** Enumerated categories of medical drug costs. */
  DrugCostCategory: NamedNode<"https://schema.org/DrugCostCategory">;
  /** Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice. */
  MedicalEnumeration: NamedNode<"https://schema.org/MedicalEnumeration">;
  /** The legal availability status of a medical drug. */
  DrugLegalStatus: NamedNode<"https://schema.org/DrugLegalStatus">;
  /** Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy. */
  DrugPregnancyCategory: NamedNode<"https://schema.org/DrugPregnancyCategory">;
  /** Indicates whether this drug is available by prescription or over-the-counter. */
  DrugPrescriptionStatus: NamedNode<
    "https://schema.org/DrugPrescriptionStatus"
  >;
  /** A specific strength in which a medical drug is available in a specific country. */
  DrugStrength: NamedNode<"https://schema.org/DrugStrength">;
  /** A dry-cleaning business. */
  DryCleaningOrLaundry: NamedNode<"https://schema.org/DryCleaningOrLaundry">;
  /** Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)). */
  Duration: NamedNode<"https://schema.org/Duration">;
  /** Book format: Ebook. */
  EBook: NamedNode<"https://schema.org/EBook">;
  /** EPRelease. */
  EPRelease: NamedNode<"https://schema.org/EPRelease">;
  /** Represents EU Energy Efficiency Class A+ as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryA1Plus: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryA1Plus"
  >;
  /** Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369. */
  EUEnergyEfficiencyEnumeration: NamedNode<
    "http://schema.org/EUEnergyEfficiencyEnumeration"
  >;
  /** Represents EU Energy Efficiency Class A++ as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryA2Plus: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryA2Plus"
  >;
  /** Represents EU Energy Efficiency Class A+++ as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryA3Plus: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryA3Plus"
  >;
  /** Represents EU Energy Efficiency Class A as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryA: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryA"
  >;
  /** Represents EU Energy Efficiency Class B as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryB: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryB"
  >;
  /** Represents EU Energy Efficiency Class C as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryC: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryC"
  >;
  /** Represents EU Energy Efficiency Class D as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryD: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryD"
  >;
  /** Represents EU Energy Efficiency Class E as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryE: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryE"
  >;
  /** Represents EU Energy Efficiency Class F as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryF: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryF"
  >;
  /** Represents EU Energy Efficiency Class G as defined in EU energy labeling regulations. */
  EUEnergyEfficiencyCategoryG: NamedNode<
    "http://schema.org/EUEnergyEfficiencyCategoryG"
  >;
  /** Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards. */
  EnergyEfficiencyEnumeration: NamedNode<
    "http://schema.org/EnergyEfficiencyEnumeration"
  >;
  /** Ear function assessment with clinical examination. */
  Ear: NamedNode<"https://schema.org/Ear">;
  /** The act of swallowing solid objects. */
  EatAction: NamedNode<"https://schema.org/EatAction">;
  /**
   * Content coded 'edited or cropped content' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'edited or cropped content': The video has been edited or rearranged. This category applies to time edits, including editing multiple videos together to alter the story being told or editing out large portions from a video.
   *
   * For an [[ImageObject]] to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.
   *
   * For an [[ImageObject]] with embedded text to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.
   *
   * For an [[AudioObject]] to be 'edited or cropped content': The audio has been edited or rearranged. This category applies to time edits, including editing multiple audio clips together to alter the story being told or editing out large portions from the recording.
   *
   */
  EditedOrCroppedContent: NamedNode<
    "https://schema.org/EditedOrCroppedContent"
  >;
  /** Event type: Education event. */
  EducationEvent: NamedNode<"https://schema.org/EducationEvent">;
  /** An EducationalAudience. */
  EducationalAudience: NamedNode<"https://schema.org/EducationalAudience">;
  /** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer. */
  EducationalOccupationalCredential: NamedNode<
    "http://schema.org/EducationalOccupationalCredential"
  >;
  /** A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree). */
  EducationalOccupationalProgram: NamedNode<
    "http://schema.org/EducationalOccupationalProgram"
  >;
  /** Content about the effectiveness-related aspects of a health topic. */
  EffectivenessHealthAspect: NamedNode<
    "http://schema.org/EffectivenessHealthAspect"
  >;
  /** An electrician. */
  Electrician: NamedNode<"https://schema.org/Electrician">;
  /** A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s). */
  HomeAndConstructionBusiness: NamedNode<
    "http://schema.org/HomeAndConstructionBusiness"
  >;
  /** An electronics store. */
  ElectronicsStore: NamedNode<"https://schema.org/ElectronicsStore">;
  /** An elementary school. */
  ElementarySchool: NamedNode<"https://schema.org/ElementarySchool">;
  /** An email message. */
  EmailMessage: NamedNode<"https://schema.org/EmailMessage">;
  /** A single message from a sender to one or more organizations or people. */
  Message: NamedNode<"https://schema.org/Message">;
  /** An embassy. */
  Embassy: NamedNode<"https://schema.org/Embassy">;
  /** A specific branch of medical science that deals with the evaluation and initial treatment of medical conditions caused by trauma or sudden illness. */
  Emergency: NamedNode<"https://schema.org/Emergency">;
  /** An emergency service, such as a fire station or ER. */
  EmergencyService: NamedNode<"https://schema.org/EmergencyService">;
  /** A subclass of OrganizationRole used to describe employee relationships. */
  EmployeeRole: NamedNode<"https://schema.org/EmployeeRole">;
  /** A subclass of Role used to describe roles within organizations. */
  OrganizationRole: NamedNode<"https://schema.org/OrganizationRole">;
  /** An aggregate rating of an Organization related to its role as an employer. */
  EmployerAggregateRating: NamedNode<
    "http://schema.org/EmployerAggregateRating"
  >;
  /** An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or former employee of that organization. */
  EmployerReview: NamedNode<"https://schema.org/EmployerReview">;
  /** An employment agency. */
  EmploymentAgency: NamedNode<"https://schema.org/EmploymentAgency">;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of endocrine glands and their secretions. */
  Endocrine: NamedNode<"https://schema.org/Endocrine">;
  /** An agent approves/certifies/likes/supports/sanctions an object. */
  EndorseAction: NamedNode<"https://schema.org/EndorseAction">;
  /**
   * An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a
   * "Like" or "+1" on a social network. It can be considered the [[result]] of an [[EndorseAction]] in which the [[object]] of the action is rated positively by
   * some [[agent]]. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the [[Action]].
   *
   * An [[EndorsementRating]] may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,
   * endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.
   *
   */
  EndorsementRating: NamedNode<"https://schema.org/EndorsementRating">;
  /** Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'. */
  Energy: NamedNode<"https://schema.org/Energy">;
  /** EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US. */
  EnergyConsumptionDetails: NamedNode<
    "http://schema.org/EnergyConsumptionDetails"
  >;
  /** Represents EnergyStar certification. */
  EnergyStarCertified: NamedNode<"https://schema.org/EnergyStarCertified">;
  /** Used to indicate whether a product is EnergyStar certified. */
  EnergyStarEnergyEfficiencyEnumeration: NamedNode<
    "http://schema.org/EnergyStarEnergyEfficiencyEnumeration"
  >;
  /** Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities. */
  EngineSpecification: NamedNode<"https://schema.org/EngineSpecification">;
  /** Enrolling participants by invitation only. */
  EnrollingByInvitation: NamedNode<"https://schema.org/EnrollingByInvitation">;
  /** An entry point, within some Web-based protocol. */
  EntryPoint: NamedNode<"https://schema.org/EntryPoint">;
  /** A media episode (e.g. TV, radio, video game) which can be part of a series or season. */
  Episode: NamedNode<"https://schema.org/Episode">;
  /** An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline. */
  EventAttendanceModeEnumeration: NamedNode<
    "http://schema.org/EventAttendanceModeEnumeration"
  >;
  /** The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s). */
  EventCancelled: NamedNode<"https://schema.org/EventCancelled">;
  /** EventStatusType is an enumeration type whose instances represent several states that an Event may be in. */
  EventStatusType: NamedNode<"https://schema.org/EventStatusType">;
  /** Indicates that the event was changed to allow online participation. See [[eventAttendanceMode]] for specifics of whether it is now fully or partially online. */
  EventMovedOnline: NamedNode<"https://schema.org/EventMovedOnline">;
  /** The event has been postponed and no new date has been set. The event's previousStartDate should be set. */
  EventPostponed: NamedNode<"https://schema.org/EventPostponed">;
  /** The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated.) */
  EventRescheduled: NamedNode<"https://schema.org/EventRescheduled">;
  /** A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
  EventReservation: NamedNode<"https://schema.org/EventReservation">;
  /** The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default. */
  EventScheduled: NamedNode<"https://schema.org/EventScheduled">;
  /**
   * A series of [[Event]]s. Included events can relate with the series using the [[superEvent]] property.
   *
   * An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which
   * is repeated regularly. The "2012 London Olympics" can be presented both as an [[Event]] in the series "Olympic Games", and as an
   * [[EventSeries]] that included a number of sporting competitions as Events.
   *
   * The nature of the association between the events in an [[EventSeries]] can vary, but typical examples could
   * include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.
   *
   * EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without
   * worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries
   * may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but
   * it may also sometimes prove useful to describe a longer-term series as an Event.
   *
   */
  EventSeries: NamedNode<"https://schema.org/EventSeries">;
  /** An event venue. */
  EventVenue: NamedNode<"https://schema.org/EventVenue">;
  /** Data derived from multiple randomized clinical trials or meta-analyses. */
  EvidenceLevelA: NamedNode<"https://schema.org/EvidenceLevelA">;
  /** Level of evidence for a medical guideline. Enumerated type. */
  MedicalEvidenceLevel: NamedNode<"https://schema.org/MedicalEvidenceLevel">;
  /** Data derived from a single randomized trial, or nonrandomized studies. */
  EvidenceLevelB: NamedNode<"https://schema.org/EvidenceLevelB">;
  /** Only consensus opinion of experts, case studies, or standard-of-care. */
  EvidenceLevelC: NamedNode<"https://schema.org/EvidenceLevelC">;
  /** A structured value representing exchange rate. */
  ExchangeRateSpecification: NamedNode<
    "http://schema.org/ExchangeRateSpecification"
  >;
  /** Specifies that a refund can be done as an exchange for the same product. */
  ExchangeRefund: NamedNode<"https://schema.org/ExchangeRefund">;
  /** Enumerates several kinds of product return refund types. */
  RefundTypeEnumeration: NamedNode<"https://schema.org/RefundTypeEnumeration">;
  /** The act of participating in exertive activity for the purposes of improving health and fitness. */
  ExerciseAction: NamedNode<"https://schema.org/ExerciseAction">;
  /** The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content. */
  PlayAction: NamedNode<"https://schema.org/PlayAction">;
  /** A gym. */
  ExerciseGym: NamedNode<"https://schema.org/ExerciseGym">;
  /** Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician. */
  ExercisePlan: NamedNode<"https://schema.org/ExercisePlan">;
  /** Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan. */
  PhysicalActivity: NamedNode<"https://schema.org/PhysicalActivity">;
  /** Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ... */
  ExhibitionEvent: NamedNode<"https://schema.org/ExhibitionEvent">;
  /** Eye or ophthalmological function assessment with clinical examination. */
  Eye: NamedNode<"https://schema.org/Eye">;
  /** A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)" (see also [[QAPage]]). */
  FAQPage: NamedNode<"https://schema.org/FAQPage">;
  /** A designation by the US FDA signifying that adequate and well-controlled studies have failed to demonstrate a risk to the fetus in the first trimester of pregnancy (and there is no evidence of risk in later trimesters). */
  FDAcategoryA: NamedNode<"https://schema.org/FDAcategoryA">;
  /** A designation by the US FDA signifying that animal reproduction studies have failed to demonstrate a risk to the fetus and there are no adequate and well-controlled studies in pregnant women. */
  FDAcategoryB: NamedNode<"https://schema.org/FDAcategoryB">;
  /** A designation by the US FDA signifying that animal reproduction studies have shown an adverse effect on the fetus and there are no adequate and well-controlled studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks. */
  FDAcategoryC: NamedNode<"https://schema.org/FDAcategoryC">;
  /** A designation by the US FDA signifying that there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience or studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks. */
  FDAcategoryD: NamedNode<"https://schema.org/FDAcategoryD">;
  /** A designation by the US FDA signifying that studies in animals or humans have demonstrated fetal abnormalities and/or there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience, and the risks involved in use of the drug in pregnant women clearly outweigh potential benefits. */
  FDAcategoryX: NamedNode<"https://schema.org/FDAcategoryX">;
  /** A designation that the drug in question has not been assigned a pregnancy category designation by the US FDA. */
  FDAnotEvaluated: NamedNode<"https://schema.org/FDAnotEvaluated">;
  /** A radio channel that uses FM. */
  FMRadioChannel: NamedNode<"https://schema.org/FMRadioChannel">;
  /** An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure. */
  FailedActionStatus: NamedNode<"https://schema.org/FailedActionStatus">;
  /** The boolean value false. */
  False: NamedNode<"https://schema.org/False">;
  /** A fast-food restaurant. */
  FastFoodRestaurant: NamedNode<"https://schema.org/FastFoodRestaurant">;
  /** The female gender. */
  Female: NamedNode<"https://schema.org/Female">;
  /** An enumeration of genders. */
  GenderType: NamedNode<"https://schema.org/GenderType">;
  /** Event type: Festival. */
  Festival: NamedNode<"https://schema.org/Festival">;
  /** The act of capturing sound and moving images on film, video, or digitally. */
  FilmAction: NamedNode<"https://schema.org/FilmAction">;
  /** A fire station. With firemen. */
  FireStation: NamedNode<"https://schema.org/FireStation">;
  /** Physical activity that is engaged in to improve joint and muscle flexibility. */
  Flexibility: NamedNode<"https://schema.org/Flexibility">;
  /** An airline flight. */
  Flight: NamedNode<"https://schema.org/Flight">;
  /** A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
  FlightReservation: NamedNode<"https://schema.org/FlightReservation">;
  /** Data type: Floating number. */
  Float: NamedNode<"https://schema.org/Float">;
  /** Data type: Number.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  Number: NamedNode<"https://schema.org/Number">;
  /** A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]]. */
  FloorPlan: NamedNode<"https://schema.org/FloorPlan">;
  /** A florist. */
  Florist: NamedNode<"https://schema.org/Florist">;
  /** The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\n\nRelated actions:\n\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it). */
  FollowAction: NamedNode<"https://schema.org/FollowAction">;
  /** A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. */
  FoodEstablishmentReservation: NamedNode<
    "http://schema.org/FoodEstablishmentReservation"
  >;
  /** Event type: Food event. */
  FoodEvent: NamedNode<"https://schema.org/FoodEvent">;
  /** A food service, like breakfast, lunch, or dinner. */
  FoodService: NamedNode<"https://schema.org/FoodService">;
  /** Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability. */
  FourWheelDriveConfiguration: NamedNode<
    "http://schema.org/FourWheelDriveConfiguration"
  >;
  /** Specifies that product returns are free of charge for the customer. */
  FreeReturn: NamedNode<"https://schema.org/FreeReturn">;
  /** Enumerates several kinds of policies for product return fees. */
  ReturnFeesEnumeration: NamedNode<"https://schema.org/ReturnFeesEnumeration">;
  /** The day of the week between Thursday and Saturday. */
  Friday: NamedNode<"https://schema.org/Friday">;
  /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
  sameAs: NamedNode<"https://schema.org/sameAs">;
  /** Front-wheel drive is a transmission layout where the engine drives the front wheels. */
  FrontWheelDriveConfiguration: NamedNode<
    "http://schema.org/FrontWheelDriveConfiguration"
  >;
  /** Indicates full game availability. */
  FullGameAvailability: NamedNode<"https://schema.org/FullGameAvailability">;
  /** Specifies that a refund can be done in the full amount the customer paid for the product. */
  FullRefund: NamedNode<"https://schema.org/FullRefund">;
  /**
   * A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages
   *     the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s).
   *     A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
   *
   * Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation, ...
   *
   */
  FundingAgency: NamedNode<"https://schema.org/FundingAgency">;
  /**
   * An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.
   * Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures.
   *
   */
  Project: NamedNode<"https://schema.org/Project">;
  /**
   * A FundingScheme combines organizational, project and policy aspects of grant-based funding
   *     that sets guidelines, principles and mechanisms to support other kinds of projects and activities.
   *     Funding is typically organized via [[Grant]] funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - [[FundingAgency]]s such as ERC, REA, ...
   */
  FundingScheme: NamedNode<"https://schema.org/FundingScheme">;
  /** Pathogenic fungus. */
  Fungus: NamedNode<"https://schema.org/Fungus">;
  /** A furniture store. */
  FurnitureStore: NamedNode<"https://schema.org/FurnitureStore">;
  /** The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting. */
  Game: NamedNode<"https://schema.org/Game">;
  /** Server that provides game interaction in a multiplayer game. */
  GameServer: NamedNode<"https://schema.org/GameServer">;
  /** Status of a game server. */
  GameServerStatus: NamedNode<"https://schema.org/GameServerStatus">;
  /** A garden store. */
  GardenStore: NamedNode<"https://schema.org/GardenStore">;
  /** A gas station. */
  GasStation: NamedNode<"https://schema.org/GasStation">;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of digestive system. */
  Gastroenterologic: NamedNode<"https://schema.org/Gastroenterologic">;
  /** Residence type: Gated community. */
  GatedResidenceCommunity: NamedNode<
    "http://schema.org/GatedResidenceCommunity"
  >;
  /** A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype). */
  Gene: NamedNode<"https://schema.org/Gene">;
  /** A general contractor. */
  GeneralContractor: NamedNode<"https://schema.org/GeneralContractor">;
  /** Represents the generic notion of the Web Platform. More specific codes include [[MobileWebPlatform]] and [[DesktopWebPlatform]], as an incomplete list. */
  GenericWebPlatform: NamedNode<"https://schema.org/GenericWebPlatform">;
  /** A specific branch of medical science that pertains to hereditary transmission and the variation of inherited characteristics and disorders. */
  Genetic: NamedNode<"https://schema.org/Genetic">;
  /** Genitourinary system function assessment with clinical examination. */
  Genitourinary: NamedNode<"https://schema.org/Genitourinary">;
  /**
   * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
   *           it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
   *           The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
   *
   */
  GeoCircle: NamedNode<"https://schema.org/GeoCircle">;
  /** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points. */
  GeoShape: NamedNode<"https://schema.org/GeoShape">;
  /** The geographic coordinates of a place or event. */
  GeoCoordinates: NamedNode<"https://schema.org/GeoCoordinates">;
  /** (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices. */
  GeospatialGeometry: NamedNode<"https://schema.org/GeospatialGeometry">;
  /** A specific branch of medical science that is concerned with the diagnosis and treatment of diseases, debilities and provision of care to the aged. */
  Geriatric: NamedNode<"https://schema.org/Geriatric">;
  /** Content that discusses practical and policy aspects for getting access to specific kinds of healthcare (e.g. distribution mechanisms for vaccines). */
  GettingAccessHealthAspect: NamedNode<
    "http://schema.org/GettingAccessHealthAspect"
  >;
  /** The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[TakeAction]]: Reciprocal of GiveAction.\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you). */
  GiveAction: NamedNode<"https://schema.org/GiveAction">;
  /** A diet exclusive of gluten. */
  GlutenFreeDiet: NamedNode<"https://schema.org/GlutenFreeDiet">;
  /** A golf course. */
  GolfCourse: NamedNode<"https://schema.org/GolfCourse">;
  /** A government office&#x2014;for example, an IRS or DMV office. */
  GovernmentOffice: NamedNode<"https://schema.org/GovernmentOffice">;
  /** A governmental organization or agency. */
  GovernmentOrganization: NamedNode<
    "https://schema.org/GovernmentOrganization"
  >;
  /** A permit issued by a government agency. */
  GovernmentPermit: NamedNode<"https://schema.org/GovernmentPermit">;
  /** A permit issued by an organization, e.g. a parking pass. */
  Permit: NamedNode<"https://schema.org/Permit">;
  /** A service provided by a government organization, e.g. food stamps, veterans benefits, etc. */
  GovernmentService: NamedNode<"https://schema.org/GovernmentService">;
  /**
   * A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
   *     sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).
   *
   * Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
   *
   * The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
   *
   */
  Grant: NamedNode<"https://schema.org/Grant">;
  /** Book format: GraphicNovel. May represent a bound collection of ComicIssue instances. */
  GraphicNovel: NamedNode<"https://schema.org/GraphicNovel">;
  /** A grocery store. */
  GroceryStore: NamedNode<"https://schema.org/GroceryStore">;
  /** The airline boards by groups based on check-in time, priority, etc. */
  GroupBoardingPolicy: NamedNode<"https://schema.org/GroupBoardingPolicy">;
  /** [[Guide]] is a page or article that recommends specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking. */
  Guide: NamedNode<"https://schema.org/Guide">;
  /** A specific branch of medical science that pertains to the health care of women, particularly in the diagnosis and treatment of disorders affecting the female reproductive system. */
  Gynecologic: NamedNode<"https://schema.org/Gynecologic">;
  /** A business that provides Heating, Ventilation and Air Conditioning services. */
  HVACBusiness: NamedNode<"https://schema.org/HVACBusiness">;
  /** A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event. */
  Hackathon: NamedNode<"https://schema.org/Hackathon">;
  /** A hair salon. */
  HairSalon: NamedNode<"https://schema.org/HairSalon">;
  /** A diet conforming to Islamic dietary practices. */
  HalalDiet: NamedNode<"https://schema.org/HalalDiet">;
  /** Book format: Hardcover. */
  Hardcover: NamedNode<"https://schema.org/Hardcover">;
  /** A hardware store. */
  HardwareStore: NamedNode<"https://schema.org/HardwareStore">;
  /** Head assessment with clinical examination. */
  Head: NamedNode<"https://schema.org/Head">;
  /** HealthCare: this is a benefit for health care. */
  HealthCare: NamedNode<"https://schema.org/HealthCare">;
  /** A health club. */
  HealthClub: NamedNode<"https://schema.org/HealthClub">;
  /** A US-style health insurance plan, including PPOs, EPOs, and HMOs. */
  HealthInsurancePlan: NamedNode<"https://schema.org/HealthInsurancePlan">;
  /** A description of costs to the patient under a given network or formulary. */
  HealthPlanCostSharingSpecification: NamedNode<
    "http://schema.org/HealthPlanCostSharingSpecification"
  >;
  /** For a given health insurance plan, the specification for costs and coverage of prescription drugs. */
  HealthPlanFormulary: NamedNode<"https://schema.org/HealthPlanFormulary">;
  /** A US-style health insurance plan network. */
  HealthPlanNetwork: NamedNode<"https://schema.org/HealthPlanNetwork">;
  /**
   * [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
   *
   */
  HealthTopicContent: NamedNode<"https://schema.org/HealthTopicContent">;
  /** WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts are not always important or obvious. The  [[WebContent]] type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types [[WebPage]], [[WebSite]] and [[WebPageElement]] will eventually be declared as subtypes of [[WebContent]].) */
  WebContent: NamedNode<"https://schema.org/WebContent">;
  /** Item is a pharmaceutical (e.g., a prescription or OTC drug) or a restricted medical device. */
  HealthcareConsideration: NamedNode<
    "http://schema.org/HealthcareConsideration"
  >;
  /** Uses devices to support users with hearing impairments. */
  HearingImpairedSupported: NamedNode<
    "http://schema.org/HearingImpairedSupported"
  >;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of blood and blood producing organs. */
  Hematologic: NamedNode<"https://schema.org/Hematologic">;
  /** A high school. */
  HighSchool: NamedNode<"https://schema.org/HighSchool">;
  /** A diet conforming to Hindu dietary practices, in particular, beef-free. */
  HinduDiet: NamedNode<"https://schema.org/HinduDiet">;
  /** A Hindu temple. */
  HinduTemple: NamedNode<"https://schema.org/HinduTemple">;
  /** A store that sells materials useful or necessary for various hobbies. */
  HobbyShop: NamedNode<"https://schema.org/HobbyShop">;
  /** A home goods store. */
  HomeGoodsStore: NamedNode<"https://schema.org/HomeGoodsStore">;
  /** A system of medicine based on the principle that a disease can be cured by a substance that produces similar symptoms in healthy people. */
  Homeopathic: NamedNode<"https://schema.org/Homeopathic">;
  /** A hospital. */
  Hospital: NamedNode<"https://schema.org/Hospital">;
  /**
   * A hostel - cheap accommodation, often in shared dormitories.
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Hostel: NamedNode<"https://schema.org/Hostel">;
  /**
   * A hotel is an establishment that provides lodging paid on a short-term basis (source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Hotel: NamedNode<"https://schema.org/Hotel">;
  /**
   * A hotel room is a single room in a hotel.
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  HotelRoom: NamedNode<"https://schema.org/HotelRoom">;
  /**
   * A room is a distinguishable space within a structure, usually separated from other spaces by interior walls (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Room: NamedNode<"https://schema.org/Room">;
  /** A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>). */
  House: NamedNode<"https://schema.org/House">;
  /** A house painting service. */
  HousePainter: NamedNode<"https://schema.org/HousePainter">;
  /** Content that discusses and explains how a particular health-related topic works, e.g. in terms of mechanisms and underlying science. */
  HowItWorksHealthAspect: NamedNode<
    "https://schema.org/HowItWorksHealthAspect"
  >;
  /** Information about how or where to find a topic. Also may contain location data that can be used for where to look for help if the topic is observed. */
  HowOrWhereHealthAspect: NamedNode<
    "https://schema.org/HowOrWhereHealthAspect"
  >;
  /** Instructions that explain how to achieve a result by performing a sequence of steps. */
  HowTo: NamedNode<"https://schema.org/HowTo">;
  /** A direction indicating a single action to do in the instructions for how to achieve a result. */
  HowToDirection: NamedNode<"https://schema.org/HowToDirection">;
  /** An list item, e.g. a step in a checklist or how-to description. */
  ListItem: NamedNode<"https://schema.org/ListItem">;
  /** An item used as either a tool or supply when performing the instructions for how to achieve a result. */
  HowToItem: NamedNode<"https://schema.org/HowToItem">;
  /** A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe). */
  HowToSection: NamedNode<"https://schema.org/HowToSection">;
  /** A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items. */
  HowToStep: NamedNode<"https://schema.org/HowToStep">;
  /** A supply consumed when performing the instructions for how to achieve a result. */
  HowToSupply: NamedNode<"https://schema.org/HowToSupply">;
  /** An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection). */
  HowToTip: NamedNode<"https://schema.org/HowToTip">;
  /** A tool used (but not consumed) when performing instructions for how to achieve a result. */
  HowToTool: NamedNode<"https://schema.org/HowToTool">;
  /** A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items. */
  HyperToc: NamedNode<"https://schema.org/HyperToc">;
  /** A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]]. */
  HyperTocEntry: NamedNode<"https://schema.org/HyperTocEntry">;
  /** Represents the broad notion of iOS-based operating systems. */
  IOSPlatform: NamedNode<"https://schema.org/IOSPlatform">;
  /** An ice cream shop. */
  IceCreamShop: NamedNode<"https://schema.org/IceCreamShop">;
  /** The act of intentionally disregarding the object. An agent ignores an object. */
  IgnoreAction: NamedNode<"https://schema.org/IgnoreAction">;
  /** Web page type: Image gallery page. */
  ImageGallery: NamedNode<"https://schema.org/ImageGallery">;
  /** Web page type: Media gallery page. A mixed-media page that can contain media such as images, videos, and other multimedia. */
  MediaGallery: NamedNode<"https://schema.org/MediaGallery">;
  /** A specific and exact (byte-for-byte) version of an [[ImageObject]]. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata (e.g. XMP, EXIF) the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
  ImageObjectSnapshot: NamedNode<"https://schema.org/ImageObjectSnapshot">;
  /** Any medical imaging modality typically used for diagnostic purposes. */
  ImagingTest: NamedNode<"https://schema.org/ImagingTest">;
  /** Indicates that a legislation is in force. */
  InForce: NamedNode<"https://schema.org/InForce">;
  /** A list of possible statuses for the legal force of a legislation. */
  LegalForceStatus: NamedNode<"https://schema.org/LegalForceStatus">;
  /** Indicates that the item is in stock. */
  InStock: NamedNode<"https://schema.org/InStock">;
  /** Indicates that the item is available only at physical locations. */
  InStoreOnly: NamedNode<"https://schema.org/InStoreOnly">;
  /** A single, identifiable product instance (e.g. a laptop with a particular serial number). */
  IndividualProduct: NamedNode<"https://schema.org/IndividualProduct">;
  /** Something in medical science that pertains to infectious diseases, i.e. caused by bacterial, viral, fungal or parasitic infections. */
  Infectious: NamedNode<"https://schema.org/Infectious">;
  /** An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease. */
  InfectiousDisease: NamedNode<"https://schema.org/InfectiousDisease">;
  /** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc. */
  MedicalCondition: NamedNode<"https://schema.org/MedicalCondition">;
  /** Content discussing ingredients-related aspects of a health topic. */
  IngredientsHealthAspect: NamedNode<
    "http://schema.org/IngredientsHealthAspect"
  >;
  /** The act of installing an application. */
  InstallAction: NamedNode<"https://schema.org/InstallAction">;
  /** Represents the installment pricing component of the total price for an offered product. */
  Installment: NamedNode<"https://schema.org/Installment">;
  /** An Insurance agency. */
  InsuranceAgency: NamedNode<"https://schema.org/InsuranceAgency">;
  /** Data type: Integer. */
  Integer: NamedNode<"https://schema.org/Integer">;
  /** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction. */
  InteractionCounter: NamedNode<"https://schema.org/InteractionCounter">;
  /** An international trial. */
  InternationalTrial: NamedNode<"https://schema.org/InternationalTrial">;
  /** An internet cafe. */
  InternetCafe: NamedNode<"https://schema.org/InternetCafe">;
  /** A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets. */
  InvestmentFund: NamedNode<"https://schema.org/InvestmentFund">;
  /** The act of asking someone to attend an event. Reciprocal of RsvpAction. */
  InviteAction: NamedNode<"https://schema.org/InviteAction">;
  /** A statement of the money due for goods or services; a bill. */
  Invoice: NamedNode<"https://schema.org/Invoice">;
  /** Represents the invoice price of an offered product. */
  InvoicePrice: NamedNode<"https://schema.org/InvoicePrice">;
  /** Enumerates different price types, for example list price, invoice price, and sale price. */
  PriceTypeEnumeration: NamedNode<"https://schema.org/PriceTypeEnumeration">;
  /** An ItemList ordered with lower values listed first. */
  ItemListOrderAscending: NamedNode<
    "https://schema.org/ItemListOrderAscending"
  >;
  /** Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized. */
  ItemListOrderType: NamedNode<"https://schema.org/ItemListOrderType">;
  /** An ItemList ordered with higher values listed first. */
  ItemListOrderDescending: NamedNode<
    "http://schema.org/ItemListOrderDescending"
  >;
  /** An ItemList ordered with no explicit order. */
  ItemListUnordered: NamedNode<"https://schema.org/ItemListUnordered">;
  /** A page devoted to a single item, such as a particular product or hotel. */
  ItemPage: NamedNode<"https://schema.org/ItemPage">;
  /** A jewelry store. */
  JewelryStore: NamedNode<"https://schema.org/JewelryStore">;
  /** A listing that describes a job opening in a certain organization. */
  JobPosting: NamedNode<"https://schema.org/JobPosting">;
  /** An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates. */
  JoinAction: NamedNode<"https://schema.org/JoinAction">;
  /** The anatomical location at which two or more bones make contact. */
  Joint: NamedNode<"https://schema.org/Joint">;
  /** A diet conforming to Jewish dietary practices. */
  KosherDiet: NamedNode<"https://schema.org/KosherDiet">;
  /** A medical science pertaining to chemical, hematological, immunologic, microscopic, or bacteriological diagnostic analyses or research. */
  LaboratoryScience: NamedNode<"https://schema.org/LaboratoryScience">;
  /** A lake (for example, Lake Pontrachain). */
  LakeBodyOfWater: NamedNode<"https://schema.org/LakeBodyOfWater">;
  /** An historical landmark or building. */
  LandmarksOrHistoricalBuildings: NamedNode<
    "http://schema.org/LandmarksOrHistoricalBuildings"
  >;
  /** Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]]. */
  Language: NamedNode<"https://schema.org/Language">;
  /** LaserDiscFormat. */
  LaserDiscFormat: NamedNode<"https://schema.org/LaserDiscFormat">;
  /** An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service. */
  LeaveAction: NamedNode<"https://schema.org/LeaveAction">;
  /** The steering position is on the left side of the vehicle (viewed from the main direction of driving). */
  LeftHandDriving: NamedNode<"https://schema.org/LeftHandDriving">;
  /** A value indicating a steering position. */
  SteeringPositionValue: NamedNode<"https://schema.org/SteeringPositionValue">;
  /** A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article). */
  Legislation: NamedNode<"https://schema.org/Legislation">;
  /** A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version. */
  LegislationObject: NamedNode<"https://schema.org/LegislationObject">;
  /** A legislative building&#x2014;for example, the state capitol. */
  LegislativeBuilding: NamedNode<"https://schema.org/LegislativeBuilding">;
  /** Any physical activity engaged in for recreational purposes. Examples may include ballroom dancing, roller skating, canoeing, fishing, etc. */
  LeisureTimeActivity: NamedNode<"https://schema.org/LeisureTimeActivity">;
  /** The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction. */
  LendAction: NamedNode<"https://schema.org/LendAction">;
  /** A library. */
  Library: NamedNode<"https://schema.org/Library">;
  /** A [[LibrarySystem]] is a collaborative system amongst several libraries. */
  LibrarySystem: NamedNode<"https://schema.org/LibrarySystem">;
  /** A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints. */
  Ligament: NamedNode<"https://schema.org/Ligament">;
  /** The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants. */
  LikeAction: NamedNode<"https://schema.org/LikeAction">;
  /** Indicates that the item has limited availability. */
  LimitedAvailability: NamedNode<"https://schema.org/LimitedAvailability">;
  /** LimitedByGuaranteeCharity: Non-profit type referring to a charitable company that is limited by guarantee (UK). */
  LimitedByGuaranteeCharity: NamedNode<
    "http://schema.org/LimitedByGuaranteeCharity"
  >;
  /** A Role that represents a Web link, e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types, e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds. */
  LinkRole: NamedNode<"https://schema.org/LinkRole">;
  /** Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\n\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html). */
  Role: NamedNode<"https://schema.org/Role">;
  /** A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits. */
  LiquorStore: NamedNode<"https://schema.org/LiquorStore">;
  /** Represents the list price (the price a product is actually advertised for) of an offered product. */
  ListPrice: NamedNode<"https://schema.org/ListPrice">;
  /** The act of consuming audio content. */
  ListenAction: NamedNode<"https://schema.org/ListenAction">;
  /** Event type: Literary event. */
  LiteraryEvent: NamedNode<"https://schema.org/LiteraryEvent">;
  /** LiveAlbum. */
  LiveAlbum: NamedNode<"https://schema.org/LiveAlbum">;
  /** A [[LiveBlogPosting]] is a [[BlogPosting]] intended to provide a rolling textual coverage of an ongoing event through continuous updates. */
  LiveBlogPosting: NamedNode<"https://schema.org/LiveBlogPosting">;
  /** Information about coping or life related to the topic. */
  LivingWithHealthAspect: NamedNode<
    "https://schema.org/LivingWithHealthAspect"
  >;
  /** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality. */
  LocationFeatureSpecification: NamedNode<
    "http://schema.org/LocationFeatureSpecification"
  >;
  /**
   * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
   *
   */
  PropertyValue: NamedNode<"https://schema.org/PropertyValue">;
  /** A DeliveryMethod in which an item is made available via locker. */
  LockerDelivery: NamedNode<"https://schema.org/LockerDelivery">;
  /** A locksmith. */
  Locksmith: NamedNode<"https://schema.org/Locksmith">;
  /** A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. */
  LodgingReservation: NamedNode<"https://schema.org/LodgingReservation">;
  /** Unlike cross-sectional studies, longitudinal studies track the same people, and therefore the differences observed in those people are less likely to be the result of cultural differences across generations. Longitudinal studies are also used in medicine to uncover predictors of certain diseases. */
  Longitudinal: NamedNode<"https://schema.org/Longitudinal">;
  /** The act of being defeated in a competitive activity. */
  LoseAction: NamedNode<"https://schema.org/LoseAction">;
  /** A diet focused on reduced calorie intake. */
  LowCalorieDiet: NamedNode<"https://schema.org/LowCalorieDiet">;
  /** A diet focused on reduced fat and cholesterol intake. */
  LowFatDiet: NamedNode<"https://schema.org/LowFatDiet">;
  /** A diet appropriate for people with lactose intolerance. */
  LowLactoseDiet: NamedNode<"https://schema.org/LowLactoseDiet">;
  /** A diet focused on reduced sodium intake. */
  LowSaltDiet: NamedNode<"https://schema.org/LowSaltDiet">;
  /** Lung and respiratory system clinical examination. */
  Lung: NamedNode<"https://schema.org/Lung">;
  /** A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart. */
  LymphaticVessel: NamedNode<"https://schema.org/LymphaticVessel">;
  /** Magnetic resonance imaging. */
  MRI: NamedNode<"https://schema.org/MRI">;
  /** Represents the manufacturer suggested retail price ("MSRP") of an offered product. */
  MSRP: NamedNode<"https://schema.org/MSRP">;
  /** The male gender. */
  Male: NamedNode<"https://schema.org/Male">;
  /** A book, document, or piece of music written by hand rather than typed or printed. */
  Manuscript: NamedNode<"https://schema.org/Manuscript">;
  /** A map. */
  Map: NamedNode<"https://schema.org/Map">;
  /** An enumeration of several kinds of Map. */
  MapCategoryType: NamedNode<"https://schema.org/MapCategoryType">;
  /** The act of marrying a person. */
  MarryAction: NamedNode<"https://schema.org/MarryAction">;
  /** Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'. */
  Mass: NamedNode<"https://schema.org/Mass">;
  /** A math solver which is capable of solving a subset of mathematical problems. */
  MathSolver: NamedNode<"https://schema.org/MathSolver">;
  /** The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
  MaximumDoseSchedule: NamedNode<"https://schema.org/MaximumDoseSchedule">;
  /** Related topics may be treated by a Topic. */
  MayTreatHealthAspect: NamedNode<"https://schema.org/MayTreatHealthAspect">;
  /**
   * A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
   *     For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
   *     a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
   *     to combat misinformation, the specific structures for representing media objects, their versions and publication context, are still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup have not yet been finalized.
   */
  MediaReview: NamedNode<"https://schema.org/MediaReview">;
  /** Represents an item or group of closely related items treated as a unit for the sake of evaluation in a [[MediaReview]]. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party. */
  MediaReviewItem: NamedNode<"https://schema.org/MediaReviewItem">;
  /** A subscription which allows a user to access media including audio, video, books, etc. */
  MediaSubscription: NamedNode<"https://schema.org/MediaSubscription">;
  /** Target audiences for medical web pages. */
  MedicalAudience: NamedNode<"https://schema.org/MedicalAudience">;
  /** A set of characteristics belonging to people, e.g. who compose an item's target audience. */
  PeopleAudience: NamedNode<"https://schema.org/PeopleAudience">;
  /** The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well. */
  MedicalCause: NamedNode<"https://schema.org/MedicalCause">;
  /** A code for a medical entity. */
  MedicalCode: NamedNode<"https://schema.org/MedicalCode">;
  /** A stage of a medical condition, such as 'Stage IIIa'. */
  MedicalConditionStage: NamedNode<"https://schema.org/MedicalConditionStage">;
  /** A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but these risks may be outweighed by other considerations or mitigated by other measures). */
  MedicalContraindication: NamedNode<
    "http://schema.org/MedicalContraindication"
  >;
  /** Any object used in a medical capacity, such as to diagnose or treat a patient. */
  MedicalDevice: NamedNode<"https://schema.org/MedicalDevice">;
  /** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity. */
  MedicalGuideline: NamedNode<"https://schema.org/MedicalGuideline">;
  /** A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound. */
  MedicalGuidelineContraindication: NamedNode<
    "http://schema.org/MedicalGuidelineContraindication"
  >;
  /** A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound. */
  MedicalGuidelineRecommendation: NamedNode<
    "http://schema.org/MedicalGuidelineRecommendation"
  >;
  /** An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment. */
  MedicalObservationalStudy: NamedNode<
    "http://schema.org/MedicalObservationalStudy"
  >;
  /** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID. */
  MedicalStudy: NamedNode<"https://schema.org/MedicalStudy">;
  /** An enumeration that describes different types of medical procedures. */
  MedicalProcedureType: NamedNode<"https://schema.org/MedicalProcedureType">;
  /** Medical researchers. */
  MedicalResearcher: NamedNode<"https://schema.org/MedicalResearcher">;
  /** A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators. */
  MedicalRiskCalculator: NamedNode<"https://schema.org/MedicalRiskCalculator">;
  /** Any rule set or interactive tool for estimating the risk of developing a complication or condition. */
  MedicalRiskEstimator: NamedNode<"https://schema.org/MedicalRiskEstimator">;
  /** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication. */
  MedicalRiskFactor: NamedNode<"https://schema.org/MedicalRiskFactor">;
  /** A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score. */
  MedicalRiskScore: NamedNode<"https://schema.org/MedicalRiskScore">;
  /** A scholarly article in the medical domain. */
  MedicalScholarlyArticle: NamedNode<
    "http://schema.org/MedicalScholarlyArticle"
  >;
  /** A scholarly article. */
  ScholarlyArticle: NamedNode<"https://schema.org/ScholarlyArticle">;
  /** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination. */
  MedicalSign: NamedNode<"https://schema.org/MedicalSign">;
  /** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective. */
  MedicalSignOrSymptom: NamedNode<"https://schema.org/MedicalSignOrSymptom">;
  /** Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort. */
  Specialty: NamedNode<"https://schema.org/Specialty">;
  /** Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue. */
  MedicalSymptom: NamedNode<"https://schema.org/MedicalSymptom">;
  /** Any collection of tests commonly ordered together. */
  MedicalTestPanel: NamedNode<"https://schema.org/MedicalTestPanel">;
  /** Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition. */
  MedicalTherapy: NamedNode<"https://schema.org/MedicalTherapy">;
  /** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition. */
  TherapeuticProcedure: NamedNode<"https://schema.org/TherapeuticProcedure">;
  /** A medical trial is a type of medical study that uses a scientific process to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups. */
  MedicalTrial: NamedNode<"https://schema.org/MedicalTrial">;
  /** A web page that provides medical information. */
  MedicalWebPage: NamedNode<"https://schema.org/MedicalWebPage">;
  /**
   * A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  MeetingRoom: NamedNode<"https://schema.org/MeetingRoom">;
  /** A men's clothing store. */
  MensClothingStore: NamedNode<"https://schema.org/MensClothingStore">;
  /** A structured representation of food or drink items available from a FoodEstablishment. */
  Menu: NamedNode<"https://schema.org/Menu">;
  /** A food or drink item listed in a menu or menu section. */
  MenuItem: NamedNode<"https://schema.org/MenuItem">;
  /** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider. */
  MenuSection: NamedNode<"https://schema.org/MenuSection">;
  /** Enumerates several kinds of product return policies. */
  MerchantReturnEnumeration: NamedNode<
    "http://schema.org/MerchantReturnEnumeration"
  >;
  /** Specifies that there is a finite window for product returns. */
  MerchantReturnFiniteReturnWindow: NamedNode<
    "http://schema.org/MerchantReturnFiniteReturnWindow"
  >;
  /** Specifies that product returns are not permitted. */
  MerchantReturnNotPermitted: NamedNode<
    "http://schema.org/MerchantReturnNotPermitted"
  >;
  /** A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product]], or [[Offer]]. */
  MerchantReturnPolicy: NamedNode<"https://schema.org/MerchantReturnPolicy">;
  /** A seasonal override of a return policy, for example used for holidays. */
  MerchantReturnPolicySeasonalOverride: NamedNode<
    "http://schema.org/MerchantReturnPolicySeasonalOverride"
  >;
  /** Specifies that there is an unlimited window for product returns. */
  MerchantReturnUnlimitedWindow: NamedNode<
    "http://schema.org/MerchantReturnUnlimitedWindow"
  >;
  /** Specifies that a product return policy is not provided. */
  MerchantReturnUnspecified: NamedNode<
    "http://schema.org/MerchantReturnUnspecified"
  >;
  /** A middle school (typically for children aged around 11-14, although this varies somewhat). */
  MiddleSchool: NamedNode<"https://schema.org/MiddleSchool">;
  /** A nurse-like health profession that deals with pregnancy, childbirth, and the postpartum period (including care of the newborn), besides sexual and reproductive health of women throughout their lives. */
  Midwifery: NamedNode<"https://schema.org/Midwifery">;
  /** Represents the minimum advertised price ("MAP") (as dictated by the manufacturer) of an offered product. */
  MinimumAdvertisedPrice: NamedNode<
    "https://schema.org/MinimumAdvertisedPrice"
  >;
  /** Content about common misconceptions and myths that are related to a topic. */
  MisconceptionsHealthAspect: NamedNode<
    "http://schema.org/MisconceptionsHealthAspect"
  >;
  /** MixedEventAttendanceMode - an event that is conducted as a combination of both offline and online modes. */
  MixedEventAttendanceMode: NamedNode<
    "http://schema.org/MixedEventAttendanceMode"
  >;
  /** MixtapeAlbum. */
  MixtapeAlbum: NamedNode<"https://schema.org/MixtapeAlbum">;
  /** A software application designed specifically to work well on a mobile device such as a telephone. */
  MobileApplication: NamedNode<"https://schema.org/MobileApplication">;
  /** A software application. */
  SoftwareApplication: NamedNode<"https://schema.org/SoftwareApplication">;
  /** A store that sells mobile phones and related accessories. */
  MobilePhoneStore: NamedNode<"https://schema.org/MobilePhoneStore">;
  /** Represents the broad notion of 'mobile' browsers as a Web Platform. */
  MobileWebPlatform: NamedNode<"https://schema.org/MobileWebPlatform">;
  /** Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity. */
  MolecularEntity: NamedNode<"https://schema.org/MolecularEntity">;
  /** The day of the week between Sunday and Tuesday. */
  Monday: NamedNode<"https://schema.org/Monday">;
  /** A statistical distribution of monetary amounts. */
  MonetaryAmountDistribution: NamedNode<
    "http://schema.org/MonetaryAmountDistribution"
  >;
  /** A statistical distribution of values. */
  QuantitativeValueDistribution: NamedNode<
    "http://schema.org/QuantitativeValueDistribution"
  >;
  /** A monetary grant. */
  MonetaryGrant: NamedNode<"https://schema.org/MonetaryGrant">;
  /** The act of transferring money from one place to another place. This may occur electronically or physically. */
  MoneyTransfer: NamedNode<"https://schema.org/MoneyTransfer">;
  /** A loan in which property or real estate is used as collateral. (A loan securitized against some real estate.) */
  MortgageLoan: NamedNode<"https://schema.org/MortgageLoan">;
  /** A mosque. */
  Mosque: NamedNode<"https://schema.org/Mosque">;
  /**
   * A motel.
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Motel: NamedNode<"https://schema.org/Motel">;
  /** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle. */
  Motorcycle: NamedNode<"https://schema.org/Motorcycle">;
  /** A motorcycle dealer. */
  MotorcycleDealer: NamedNode<"https://schema.org/MotorcycleDealer">;
  /** A motorcycle repair shop. */
  MotorcycleRepair: NamedNode<"https://schema.org/MotorcycleRepair">;
  /** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling. */
  MotorizedBicycle: NamedNode<"https://schema.org/MotorizedBicycle">;
  /** A mountain, like Mount Whitney or Mount Everest. */
  Mountain: NamedNode<"https://schema.org/Mountain">;
  /** A movie. */
  Movie: NamedNode<"https://schema.org/Movie">;
  /** A short segment/part of a movie. */
  MovieClip: NamedNode<"https://schema.org/MovieClip">;
  /** A movie rental store. */
  MovieRentalStore: NamedNode<"https://schema.org/MovieRentalStore">;
  /** A series of movies. Included movies can be indicated with the hasPart property. */
  MovieSeries: NamedNode<"https://schema.org/MovieSeries">;
  /** A movie theater. */
  MovieTheater: NamedNode<"https://schema.org/MovieTheater">;
  /** A moving company. */
  MovingCompany: NamedNode<"https://schema.org/MovingCompany">;
  /** A trial that takes place at multiple centers. */
  MultiCenterTrial: NamedNode<"https://schema.org/MultiCenterTrial">;
  /** Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously. */
  MultiPlayer: NamedNode<"https://schema.org/MultiPlayer">;
  /** Multicellular parasite that causes an infection. */
  MulticellularParasite: NamedNode<"https://schema.org/MulticellularParasite">;
  /** A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement. */
  Muscle: NamedNode<"https://schema.org/Muscle">;
  /** A specific branch of medical science that pertains to diagnosis and treatment of disorders of muscles, ligaments and skeletal system. */
  Musculoskeletal: NamedNode<"https://schema.org/Musculoskeletal">;
  /** Musculoskeletal system clinical examination. */
  MusculoskeletalExam: NamedNode<"https://schema.org/MusculoskeletalExam">;
  /** A museum. */
  Museum: NamedNode<"https://schema.org/Museum">;
  /** A collection of music tracks. */
  MusicAlbum: NamedNode<"https://schema.org/MusicAlbum">;
  /** A collection of music tracks in playlist form. */
  MusicPlaylist: NamedNode<"https://schema.org/MusicPlaylist">;
  /** A musical composition. */
  MusicComposition: NamedNode<"https://schema.org/MusicComposition">;
  /** Event type: Music event. */
  MusicEvent: NamedNode<"https://schema.org/MusicEvent">;
  /** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician. */
  MusicGroup: NamedNode<"https://schema.org/MusicGroup">;
  /** A music recording (track), usually a single song. */
  MusicRecording: NamedNode<"https://schema.org/MusicRecording">;
  /** A MusicRelease is a specific release of a music album. */
  MusicRelease: NamedNode<"https://schema.org/MusicRelease">;
  /** A music store. */
  MusicStore: NamedNode<"https://schema.org/MusicStore">;
  /** A music venue. */
  MusicVenue: NamedNode<"https://schema.org/MusicVenue">;
  /** A music video file. */
  MusicVideoObject: NamedNode<"https://schema.org/MusicVideoObject">;
  /** Organization: Non-governmental Organization. */
  NGO: NamedNode<"https://schema.org/NGO">;
  /** NLNonprofitType: Non-profit organization type originating from the Netherlands. */
  NLNonprofitType: NamedNode<"https://schema.org/NLNonprofitType">;
  /** NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be. */
  NonprofitType: NamedNode<"https://schema.org/NonprofitType">;
  /** A nail salon. */
  NailSalon: NamedNode<"https://schema.org/NailSalon">;
  /** Item is a narcotic as defined by the [1961 UN convention](https://www.incb.org/incb/en/narcotic-drugs/Yellowlist/yellow-list.html), for example marijuana or heroin. */
  NarcoticConsideration: NamedNode<"https://schema.org/NarcoticConsideration">;
  /** Neck assessment with clinical examination. */
  Neck: NamedNode<"https://schema.org/Neck">;
  /** A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons. */
  Nerve: NamedNode<"https://schema.org/Nerve">;
  /** Neurological system clinical examination. */
  Neuro: NamedNode<"https://schema.org/Neuro">;
  /** A specific branch of medical science that studies the nerves and nervous system and its respective disease states. */
  Neurologic: NamedNode<"https://schema.org/Neurologic">;
  /** Indicates that the item is new. */
  NewCondition: NamedNode<"https://schema.org/NewCondition">;
  /** A News/Media organization such as a newspaper or TV station. */
  NewsMediaOrganization: NamedNode<"https://schema.org/NewsMediaOrganization">;
  /** A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily. */
  Newspaper: NamedNode<"https://schema.org/Newspaper">;
  /** A nightclub or discotheque. */
  NightClub: NamedNode<"https://schema.org/NightClub">;
  /** A type of medical procedure that involves noninvasive techniques. */
  NoninvasiveProcedure: NamedNode<"https://schema.org/NoninvasiveProcedure">;
  /** Nonprofit501a: Non-profit type referring to Farmers’ Cooperative Associations. */
  Nonprofit501a: NamedNode<"https://schema.org/Nonprofit501a">;
  /** USNonprofitType: Non-profit organization type originating from the United States. */
  USNonprofitType: NamedNode<"https://schema.org/USNonprofitType">;
  /** Nonprofit501c10: Non-profit type referring to Domestic Fraternal Societies and Associations. */
  Nonprofit501c10: NamedNode<"https://schema.org/Nonprofit501c10">;
  /** Nonprofit501c11: Non-profit type referring to Teachers' Retirement Fund Associations. */
  Nonprofit501c11: NamedNode<"https://schema.org/Nonprofit501c11">;
  /** Nonprofit501c12: Non-profit type referring to Benevolent Life Insurance Associations, Mutual Ditch or Irrigation Companies, Mutual or Cooperative Telephone Companies. */
  Nonprofit501c12: NamedNode<"https://schema.org/Nonprofit501c12">;
  /** Nonprofit501c13: Non-profit type referring to Cemetery Companies. */
  Nonprofit501c13: NamedNode<"https://schema.org/Nonprofit501c13">;
  /** Nonprofit501c14: Non-profit type referring to State-Chartered Credit Unions, Mutual Reserve Funds. */
  Nonprofit501c14: NamedNode<"https://schema.org/Nonprofit501c14">;
  /** Nonprofit501c15: Non-profit type referring to Mutual Insurance Companies or Associations. */
  Nonprofit501c15: NamedNode<"https://schema.org/Nonprofit501c15">;
  /** Nonprofit501c16: Non-profit type referring to Cooperative Organizations to Finance Crop Operations. */
  Nonprofit501c16: NamedNode<"https://schema.org/Nonprofit501c16">;
  /** Nonprofit501c17: Non-profit type referring to Supplemental Unemployment Benefit Trusts. */
  Nonprofit501c17: NamedNode<"https://schema.org/Nonprofit501c17">;
  /** Nonprofit501c18: Non-profit type referring to Employee Funded Pension Trust (created before 25 June 1959). */
  Nonprofit501c18: NamedNode<"https://schema.org/Nonprofit501c18">;
  /** Nonprofit501c19: Non-profit type referring to Post or Organization of Past or Present Members of the Armed Forces. */
  Nonprofit501c19: NamedNode<"https://schema.org/Nonprofit501c19">;
  /** Nonprofit501c1: Non-profit type referring to Corporations Organized Under Act of Congress, including Federal Credit Unions and National Farm Loan Associations. */
  Nonprofit501c1: NamedNode<"https://schema.org/Nonprofit501c1">;
  /** Nonprofit501c20: Non-profit type referring to Group Legal Services Plan Organizations. */
  Nonprofit501c20: NamedNode<"https://schema.org/Nonprofit501c20">;
  /** Nonprofit501c21: Non-profit type referring to Black Lung Benefit Trusts. */
  Nonprofit501c21: NamedNode<"https://schema.org/Nonprofit501c21">;
  /** Nonprofit501c22: Non-profit type referring to Withdrawal Liability Payment Funds. */
  Nonprofit501c22: NamedNode<"https://schema.org/Nonprofit501c22">;
  /** Nonprofit501c23: Non-profit type referring to Veterans Organizations. */
  Nonprofit501c23: NamedNode<"https://schema.org/Nonprofit501c23">;
  /** Nonprofit501c24: Non-profit type referring to Section 4049 ERISA Trusts. */
  Nonprofit501c24: NamedNode<"https://schema.org/Nonprofit501c24">;
  /** Nonprofit501c25: Non-profit type referring to Real Property Title-Holding Corporations or Trusts with Multiple Parents. */
  Nonprofit501c25: NamedNode<"https://schema.org/Nonprofit501c25">;
  /** Nonprofit501c26: Non-profit type referring to State-Sponsored Organizations Providing Health Coverage for High-Risk Individuals. */
  Nonprofit501c26: NamedNode<"https://schema.org/Nonprofit501c26">;
  /** Nonprofit501c27: Non-profit type referring to State-Sponsored Workers' Compensation Reinsurance Organizations. */
  Nonprofit501c27: NamedNode<"https://schema.org/Nonprofit501c27">;
  /** Nonprofit501c28: Non-profit type referring to National Railroad Retirement Investment Trusts. */
  Nonprofit501c28: NamedNode<"https://schema.org/Nonprofit501c28">;
  /** Nonprofit501c2: Non-profit type referring to Title-holding Corporations for Exempt Organizations. */
  Nonprofit501c2: NamedNode<"https://schema.org/Nonprofit501c2">;
  /** Nonprofit501c3: Non-profit type referring to Religious, Educational, Charitable, Scientific, Literary, Testing for Public Safety, Fostering National or International Amateur Sports Competition, or Prevention of Cruelty to Children or Animals Organizations. */
  Nonprofit501c3: NamedNode<"https://schema.org/Nonprofit501c3">;
  /** Nonprofit501c4: Non-profit type referring to Civic Leagues, Social Welfare Organizations, and Local Associations of Employees. */
  Nonprofit501c4: NamedNode<"https://schema.org/Nonprofit501c4">;
  /** Nonprofit501c5: Non-profit type referring to Labor, Agricultural and Horticultural Organizations. */
  Nonprofit501c5: NamedNode<"https://schema.org/Nonprofit501c5">;
  /** Nonprofit501c6: Non-profit type referring to Business Leagues, Chambers of Commerce, Real Estate Boards. */
  Nonprofit501c6: NamedNode<"https://schema.org/Nonprofit501c6">;
  /** Nonprofit501c7: Non-profit type referring to Social and Recreational Clubs. */
  Nonprofit501c7: NamedNode<"https://schema.org/Nonprofit501c7">;
  /** Nonprofit501c8: Non-profit type referring to Fraternal Beneficiary Societies and Associations. */
  Nonprofit501c8: NamedNode<"https://schema.org/Nonprofit501c8">;
  /** Nonprofit501c9: Non-profit type referring to Voluntary Employee Beneficiary Associations. */
  Nonprofit501c9: NamedNode<"https://schema.org/Nonprofit501c9">;
  /** Nonprofit501d: Non-profit type referring to Religious and Apostolic Associations. */
  Nonprofit501d: NamedNode<"https://schema.org/Nonprofit501d">;
  /** Nonprofit501e: Non-profit type referring to Cooperative Hospital Service Organizations. */
  Nonprofit501e: NamedNode<"https://schema.org/Nonprofit501e">;
  /** Nonprofit501f: Non-profit type referring to Cooperative Service Organizations. */
  Nonprofit501f: NamedNode<"https://schema.org/Nonprofit501f">;
  /** Nonprofit501k: Non-profit type referring to Child Care Organizations. */
  Nonprofit501k: NamedNode<"https://schema.org/Nonprofit501k">;
  /** Nonprofit501n: Non-profit type referring to Charitable Risk Pools. */
  Nonprofit501n: NamedNode<"https://schema.org/Nonprofit501n">;
  /** Nonprofit501q: Non-profit type referring to Credit Counseling Organizations. */
  Nonprofit501q: NamedNode<"https://schema.org/Nonprofit501q">;
  /** Nonprofit527: Non-profit type referring to political organizations. */
  Nonprofit527: NamedNode<"https://schema.org/Nonprofit527">;
  /** NonprofitANBI: Non-profit type referring to a Public Benefit Organization (NL). */
  NonprofitANBI: NamedNode<"https://schema.org/NonprofitANBI">;
  /** NonprofitSBBI: Non-profit type referring to a Social Interest Promoting Institution (NL). */
  NonprofitSBBI: NamedNode<"https://schema.org/NonprofitSBBI">;
  /** Nose function assessment with clinical examination. */
  Nose: NamedNode<"https://schema.org/Nose">;
  /** Indicates that a legislation is currently not in force. */
  NotInForce: NamedNode<"https://schema.org/NotInForce">;
  /** Not yet recruiting. */
  NotYetRecruiting: NamedNode<"https://schema.org/NotYetRecruiting">;
  /** A notary. */
  Notary: NamedNode<"https://schema.org/Notary">;
  /** A file containing a note, primarily for the author. */
  NoteDigitalDocument: NamedNode<"https://schema.org/NoteDigitalDocument">;
  /** A health profession of a person formally educated and trained in the care of the sick or infirm person. */
  Nursing: NamedNode<"https://schema.org/Nursing">;
  /** Nutritional information about the recipe. */
  NutritionInformation: NamedNode<"https://schema.org/NutritionInformation">;
  /** The character of a medical substance, typically a medicine, of being available over the counter or not. */
  OTC: NamedNode<"https://schema.org/OTC">;
  /**
   * Instances of the class [[Observation]] are used to specify observations about an entity (which may or may not be an instance of a [[StatisticalPopulation]]), at a particular time. The principal properties of an [[Observation]] are [[observedNode]], [[measuredProperty]], [[measuredValue]] (or [[median]], etc.) and [[observationDate]] ([[measuredProperty]] properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the [lifeExpectancy example](https://www.w3.org/TR/vocab-data-cube/#dsd-example)).
   * See also [[StatisticalPopulation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
   *
   */
  Observation: NamedNode<"https://schema.org/Observation">;
  /** An observational study design. */
  Observational: NamedNode<"https://schema.org/Observational">;
  /** A specific branch of medical science that specializes in the care of women during the prenatal and postnatal care and with the delivery of the child. */
  Obstetric: NamedNode<"https://schema.org/Obstetric">;
  /** A profession, may involve prolonged training and/or a formal qualification. */
  Occupation: NamedNode<"https://schema.org/Occupation">;
  /** Any physical activity engaged in for job-related purposes. Examples may include waiting tables, maid service, carrying a mailbag, picking fruits or vegetables, construction work, etc. */
  OccupationalActivity: NamedNode<"https://schema.org/OccupationalActivity">;
  /** Indicates employment-related experience requirements, e.g. [[monthsOfExperience]]. */
  OccupationalExperienceRequirements: NamedNode<
    "http://schema.org/OccupationalExperienceRequirements"
  >;
  /** A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems. */
  OccupationalTherapy: NamedNode<"https://schema.org/OccupationalTherapy">;
  /** An ocean (for example, the Pacific). */
  OceanBodyOfWater: NamedNode<"https://schema.org/OceanBodyOfWater">;
  /** An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider. */
  OfferCatalog: NamedNode<"https://schema.org/OfferCatalog">;
  /**
   * An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose
   *   [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
   *   background on the underlying concepts.
   *
   */
  OfferForLease: NamedNode<"https://schema.org/OfferForLease">;
  /**
   * An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose
   *   [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for
   *   background on the underlying concepts.
   *
   */
  OfferForPurchase: NamedNode<"https://schema.org/OfferForPurchase">;
  /**
   * OfferShippingDetails represents information about shipping destinations.
   *
   * Multiple of these entities can be used to represent different shipping rates for different destinations:
   *
   * One entity for Alaska/Hawaii. A different one for continental US. A different one for all France.
   *
   * Multiple of these entities can be used to represent different shipping costs and delivery times.
   *
   * Two entities that are identical but differ in rate and time:
   *
   * E.g. Cheaper and slower: $5 in 5-7 days
   * or Fast and expensive: $15 in 1-2 days.
   */
  OfferShippingDetails: NamedNode<"https://schema.org/OfferShippingDetails">;
  /** An office equipment store. */
  OfficeEquipmentStore: NamedNode<"https://schema.org/OfficeEquipmentStore">;
  /** All the documents published by an official publisher should have at least the legal value level "OfficialLegalValue". This indicates that the document was published by an organisation with the public task of making it available (e.g. a consolidated version of an EU directive published by the EU Office of Publications). */
  OfficialLegalValue: NamedNode<"https://schema.org/OfficialLegalValue">;
  /** OfflineEventAttendanceMode - an event that is primarily conducted offline. */
  OfflineEventAttendanceMode: NamedNode<
    "http://schema.org/OfflineEventAttendanceMode"
  >;
  /** Game server status: OfflinePermanently. Server is offline and not available. */
  OfflinePermanently: NamedNode<"https://schema.org/OfflinePermanently">;
  /** Game server status: OfflineTemporarily. Server is offline now but it can be online soon. */
  OfflineTemporarily: NamedNode<"https://schema.org/OfflineTemporarily">;
  /** A publication event, e.g. catch-up TV or radio podcast, during which a program is available on-demand. */
  OnDemandEvent: NamedNode<"https://schema.org/OnDemandEvent">;
  /** A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office. */
  OnSitePickup: NamedNode<"https://schema.org/OnSitePickup">;
  /** A specific branch of medical science that deals with benign and malignant tumors, including the study of their development, diagnosis, treatment and prevention. */
  Oncologic: NamedNode<"https://schema.org/Oncologic">;
  /** OneTimePayments: this is a benefit for one-time payments for individuals. */
  OneTimePayments: NamedNode<"https://schema.org/OneTimePayments">;
  /** Game server status: Online. Server is available. */
  Online: NamedNode<"https://schema.org/Online">;
  /** A particular online business, either standalone or the online part of a broader organization. Examples include an eCommerce site, an online travel booking site, an online learning site, an online logistics and shipping provider, an online (virtual) doctor, etc. */
  OnlineBusiness: NamedNode<"https://schema.org/OnlineBusiness">;
  /** OnlineEventAttendanceMode - an event that is primarily conducted online. */
  OnlineEventAttendanceMode: NamedNode<
    "http://schema.org/OnlineEventAttendanceMode"
  >;
  /** Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached. */
  OnlineFull: NamedNode<"https://schema.org/OnlineFull">;
  /** Indicates that the item is available only online. */
  OnlineOnly: NamedNode<"https://schema.org/OnlineOnly">;
  /** An eCommerce site. */
  OnlineStore: NamedNode<"https://schema.org/OnlineStore">;
  /** A trial design in which the researcher knows the full details of the treatment, and so does the patient. */
  OpenTrial: NamedNode<"https://schema.org/OpenTrial">;
  /**
   * A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
   * The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
   *
   */
  OpeningHoursSpecification: NamedNode<
    "http://schema.org/OpeningHoursSpecification"
  >;
  /** An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication. */
  OpinionNewsArticle: NamedNode<"https://schema.org/OpinionNewsArticle">;
  /** A store that sells reading glasses and similar devices for improving vision. */
  Optician: NamedNode<"https://schema.org/Optician">;
  /** The science or practice of testing visual acuity and prescribing corrective lenses. */
  Optometric: NamedNode<"https://schema.org/Optometric">;
  /** An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer. */
  Order: NamedNode<"https://schema.org/Order">;
  /** An agent orders an object/product/service to be delivered/sent. */
  OrderAction: NamedNode<"https://schema.org/OrderAction">;
  /** OrderStatus representing cancellation of an order. */
  OrderCancelled: NamedNode<"https://schema.org/OrderCancelled">;
  /** Enumerated status values for Order. */
  OrderStatus: NamedNode<"https://schema.org/OrderStatus">;
  /** OrderStatus representing successful delivery of an order. */
  OrderDelivered: NamedNode<"https://schema.org/OrderDelivered">;
  /** OrderStatus representing that an order is in transit. */
  OrderInTransit: NamedNode<"https://schema.org/OrderInTransit">;
  /** An order item is a line of an order. It includes the quantity and shipping details of a bought offer. */
  OrderItem: NamedNode<"https://schema.org/OrderItem">;
  /** OrderStatus representing that payment is due on an order. */
  OrderPaymentDue: NamedNode<"https://schema.org/OrderPaymentDue">;
  /** OrderStatus representing availability of an order for pickup. */
  OrderPickupAvailable: NamedNode<"https://schema.org/OrderPickupAvailable">;
  /** OrderStatus representing that there is a problem with the order. */
  OrderProblem: NamedNode<"https://schema.org/OrderProblem">;
  /** OrderStatus representing that an order is being processed. */
  OrderProcessing: NamedNode<"https://schema.org/OrderProcessing">;
  /** OrderStatus representing that an order has been returned. */
  OrderReturned: NamedNode<"https://schema.org/OrderReturned">;
  /**
   * Content coded 'as original media content' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'original': No evidence the footage has been misleadingly altered or manipulated, though it may contain false or misleading claims.
   *
   * For an [[ImageObject]] to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.
   *
   * For an [[ImageObject]] with embedded text to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.
   *
   * For an [[AudioObject]] to be 'original': No evidence the audio has been misleadingly altered or manipulated, though it may contain false or misleading claims.
   *
   */
  OriginalMediaContent: NamedNode<"https://schema.org/OriginalMediaContent">;
  /** Specifies that the customer must pay the original shipping costs when returning a product. */
  OriginalShippingFees: NamedNode<"https://schema.org/OriginalShippingFees">;
  /** A system of medicine focused on promoting the body's innate ability to heal itself. */
  Osteopathic: NamedNode<"https://schema.org/Osteopathic">;
  /** A specific branch of medical science that is concerned with the ear, nose and throat and their respective disease states. */
  Otolaryngologic: NamedNode<"https://schema.org/Otolaryngologic">;
  /** Indicates that the item is out of stock. */
  OutOfStock: NamedNode<"https://schema.org/OutOfStock">;
  /** An outlet store. */
  OutletStore: NamedNode<"https://schema.org/OutletStore">;
  /** Overview of the content. Contains a summarized view of the topic with the most relevant information for an introduction. */
  OverviewHealthAspect: NamedNode<"https://schema.org/OverviewHealthAspect">;
  /** A structured value providing information about when a certain organization or person owned a certain product. */
  OwnershipInfo: NamedNode<"https://schema.org/OwnershipInfo">;
  /** Positron emission tomography imaging. */
  PET: NamedNode<"https://schema.org/PET">;
  /** PaidLeave: this is a benefit for paid leave. */
  PaidLeave: NamedNode<"https://schema.org/PaidLeave">;
  /** The act of producing a painting, typically with paint and canvas as instruments. */
  PaintAction: NamedNode<"https://schema.org/PaintAction">;
  /** A painting. */
  Painting: NamedNode<"https://schema.org/Painting">;
  /** A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition. */
  PalliativeProcedure: NamedNode<"https://schema.org/PalliativeProcedure">;
  /** Book format: Paperback. */
  Paperback: NamedNode<"https://schema.org/Paperback">;
  /** The delivery of a parcel either via the postal service or a commercial service. */
  ParcelDelivery: NamedNode<"https://schema.org/ParcelDelivery">;
  /**
   * A private parcel service as the delivery mode available for a certain offer.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
   *
   */
  ParcelService: NamedNode<"https://schema.org/ParcelService">;
  /** A set of characteristics describing parents, who can be interested in viewing some content. */
  ParentAudience: NamedNode<"https://schema.org/ParentAudience">;
  /** ParentalSupport: this is a benefit for parental support. */
  ParentalSupport: NamedNode<"https://schema.org/ParentalSupport">;
  /** A park. */
  Park: NamedNode<"https://schema.org/Park">;
  /** A parking lot or other parking facility. */
  ParkingFacility: NamedNode<"https://schema.org/ParkingFacility">;
  /** A parking map. */
  ParkingMap: NamedNode<"https://schema.org/ParkingMap">;
  /** Indicates that parts of the legislation are in force, and parts are not. */
  PartiallyInForce: NamedNode<"https://schema.org/PartiallyInForce">;
  /** A specific branch of medical science that is concerned with the study of the cause, origin and nature of a disease state, including its consequences as a result of manifestation of the disease. In clinical care, the term is used to designate a branch of medicine using laboratory tests to diagnose and determine the prognostic significance of illness. */
  Pathology: NamedNode<"https://schema.org/Pathology">;
  /** A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist. */
  PathologyTest: NamedNode<"https://schema.org/PathologyTest">;
  /** A patient is any person recipient of health care services. */
  Patient: NamedNode<"https://schema.org/Patient">;
  /** A person (alive, dead, undead, or fictional). */
  Person: NamedNode<"https://schema.org/Person">;
  /** Content about the real life experience of patients or people that have lived a similar experience about the topic. May be forums, topics, Q-and-A and related material. */
  PatientExperienceHealthAspect: NamedNode<
    "http://schema.org/PatientExperienceHealthAspect"
  >;
  /** A shop that will buy, or lend money against the security of, personal possessions. */
  PawnShop: NamedNode<"https://schema.org/PawnShop">;
  /** An agent pays a price to a participant. */
  PayAction: NamedNode<"https://schema.org/PayAction">;
  /** An automatic payment system is in place and will be used. */
  PaymentAutomaticallyApplied: NamedNode<
    "http://schema.org/PaymentAutomaticallyApplied"
  >;
  /** A specific payment status. For example, PaymentDue, PaymentComplete, etc. */
  PaymentStatusType: NamedNode<"https://schema.org/PaymentStatusType">;
  /**
   * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\n* http://purl.org/goodrelations/v1#ByInvoice\n* http://purl.org/goodrelations/v1#Cash\n* http://purl.org/goodrelations/v1#CheckInAdvance\n* http://purl.org/goodrelations/v1#COD\n* http://purl.org/goodrelations/v1#DirectDebit\n* http://purl.org/goodrelations/v1#GoogleCheckout\n* http://purl.org/goodrelations/v1#PayPal\n* http://purl.org/goodrelations/v1#PaySwarm
   *
   */
  PaymentMethod: NamedNode<"https://schema.org/PaymentMethod">;
  /** The costs of settling the payment using a particular payment method. */
  PaymentChargeSpecification: NamedNode<
    "http://schema.org/PaymentChargeSpecification"
  >;
  /** The payment has been received and processed. */
  PaymentComplete: NamedNode<"https://schema.org/PaymentComplete">;
  /** The payee received the payment, but it was declined for some reason. */
  PaymentDeclined: NamedNode<"https://schema.org/PaymentDeclined">;
  /** The payment is due, but still within an acceptable time to be received. */
  PaymentDue: NamedNode<"https://schema.org/PaymentDue">;
  /** The payment is due and considered late. */
  PaymentPastDue: NamedNode<"https://schema.org/PaymentPastDue">;
  /** A Service to transfer funds from a person or organization to a beneficiary person or organization. */
  PaymentService: NamedNode<"https://schema.org/PaymentService">;
  /** A specific branch of medical science that specializes in the care of infants, children and adolescents. */
  Pediatric: NamedNode<"https://schema.org/Pediatric">;
  /** A type of medical procedure that involves percutaneous techniques, where access to organs or tissue is achieved via needle-puncture of the skin. For example, catheter-based procedures like stent delivery. */
  PercutaneousProcedure: NamedNode<"https://schema.org/PercutaneousProcedure">;
  /** The act of participating in performance arts. */
  PerformAction: NamedNode<"https://schema.org/PerformAction">;
  /** A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc. */
  PerformanceRole: NamedNode<"https://schema.org/PerformanceRole">;
  /** A theater or other performing art center. */
  PerformingArtsTheater: NamedNode<"https://schema.org/PerformingArtsTheater">;
  /** A pet store. */
  PetStore: NamedNode<"https://schema.org/PetStore">;
  /** A pharmacy or drugstore. */
  Pharmacy: NamedNode<"https://schema.org/Pharmacy">;
  /** The practice or art and science of preparing and dispensing drugs and medicines. */
  PharmacySpecialty: NamedNode<"https://schema.org/PharmacySpecialty">;
  /** A photograph. */
  Photograph: NamedNode<"https://schema.org/Photograph">;
  /** The act of capturing still images of objects using a camera. */
  PhotographAction: NamedNode<"https://schema.org/PhotographAction">;
  /** A process of progressive physical care and rehabilitation aimed at improving a health condition. */
  PhysicalTherapy: NamedNode<"https://schema.org/PhysicalTherapy">;
  /** A doctor's office. */
  Physician: NamedNode<"https://schema.org/Physician">;
  /** The practice of treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery. */
  Physiotherapy: NamedNode<"https://schema.org/Physiotherapy">;
  /** A placebo-controlled trial design. */
  PlaceboControlledTrial: NamedNode<
    "https://schema.org/PlaceboControlledTrial"
  >;
  /** A specific branch of medical science that pertains to therapeutic or cosmetic repair or re-formation of missing, injured or malformed tissues or body parts by manual and instrumental means. */
  PlasticSurgery: NamedNode<"https://schema.org/PlasticSurgery">;
  /** A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note: A performance of a Play would be a [[TheaterEvent]] or [[BroadcastEvent]] - the *Play* being the [[workPerformed]]. */
  Play: NamedNode<"https://schema.org/Play">;
  /** The act of playing a video game. */
  PlayGameAction: NamedNode<"https://schema.org/PlayGameAction">;
  /** A playground. */
  Playground: NamedNode<"https://schema.org/Playground">;
  /** A plumbing service. */
  Plumber: NamedNode<"https://schema.org/Plumber">;
  /** A single episode of a podcast series. */
  PodcastEpisode: NamedNode<"https://schema.org/PodcastEpisode">;
  /** A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used. */
  PodcastSeason: NamedNode<"https://schema.org/PodcastSeason">;
  /** A podcast is an episodic series of digital audio or video files which a user can download and listen to. */
  PodcastSeries: NamedNode<"https://schema.org/PodcastSeries">;
  /** Podiatry is the care of the human foot, especially the diagnosis and treatment of foot disorders. */
  Podiatric: NamedNode<"https://schema.org/Podiatric">;
  /** A police station. */
  PoliceStation: NamedNode<"https://schema.org/PoliceStation">;
  /** A pond. */
  Pond: NamedNode<"https://schema.org/Pond">;
  /** A post office. */
  PostOffice: NamedNode<"https://schema.org/PostOffice">;
  /** The mailing address. */
  PostalAddress: NamedNode<"https://schema.org/PostalAddress">;
  /** Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively. */
  PostalCodeRangeSpecification: NamedNode<
    "http://schema.org/PostalCodeRangeSpecification"
  >;
  /** A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something. */
  Poster: NamedNode<"https://schema.org/Poster">;
  /** A description of an action that is supported. */
  PotentialActionStatus: NamedNode<"https://schema.org/PotentialActionStatus">;
  /** Indicates that the item is available for pre-order. */
  PreOrder: NamedNode<"https://schema.org/PreOrder">;
  /** An agent orders a (not yet released) object/product/service to be delivered/sent. */
  PreOrderAction: NamedNode<"https://schema.org/PreOrderAction">;
  /** Indicates that the item is available for ordering and delivery before general availability. */
  PreSale: NamedNode<"https://schema.org/PreSale">;
  /** Content discussing pregnancy-related aspects of a health topic. */
  PregnancyHealthAspect: NamedNode<"https://schema.org/PregnancyHealthAspect">;
  /** The act of inserting at the beginning if an ordered collection. */
  PrependAction: NamedNode<"https://schema.org/PrependAction">;
  /** A preschool. */
  Preschool: NamedNode<"https://schema.org/Preschool">;
  /** Available by prescription only. */
  PrescriptionOnly: NamedNode<"https://schema.org/PrescriptionOnly">;
  /** A file containing slides or used for a presentation. */
  PresentationDigitalDocument: NamedNode<
    "http://schema.org/PresentationDigitalDocument"
  >;
  /** Information about actions or measures that can be taken to avoid getting the topic or reaching a critical situation related to the topic. */
  PreventionHealthAspect: NamedNode<
    "https://schema.org/PreventionHealthAspect"
  >;
  /** An indication for preventing an underlying condition, symptom, etc. */
  PreventionIndication: NamedNode<"https://schema.org/PreventionIndication">;
  /** The medical care by a physician, or other health-care professional, who is the patient's first contact with the health-care system and who may recommend a specialist if necessary. */
  PrimaryCare: NamedNode<"https://schema.org/PrimaryCare">;
  /** A prion is an infectious agent composed of protein in a misfolded form. */
  Prion: NamedNode<"https://schema.org/Prion">;
  /** A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]]. */
  ProductCollection: NamedNode<"https://schema.org/ProductCollection">;
  /**
   * A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.
   *
   * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]].
   */
  ProductGroup: NamedNode<"https://schema.org/ProductGroup">;
  /** A datasheet or vendor specification of a product (in the sense of a prototypical description). */
  ProductModel: NamedNode<"https://schema.org/ProductModel">;
  /**
   * Original definition: "provider of professional services."\n\nThe general [[ProfessionalService]] type for local businesses was deprecated due to confusion with [[Service]]. For reference, the types that it included were: [[Dentist]],
   *         [[AccountingService]], [[Attorney]], [[Notary]], as well as types for several kinds of [[HomeAndConstructionBusiness]]: [[Electrician]], [[GeneralContractor]],
   *         [[HousePainter]], [[Locksmith]], [[Plumber]], [[RoofingContractor]]. [[LegalService]] was introduced as a more inclusive supertype of [[Attorney]].
   */
  ProfessionalService: NamedNode<"https://schema.org/ProfessionalService">;
  /** Web page type: Profile page. */
  ProfilePage: NamedNode<"https://schema.org/ProfilePage">;
  /** Typical progression and happenings of life course of the topic. */
  PrognosisHealthAspect: NamedNode<"https://schema.org/PrognosisHealthAspect">;
  /** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc. */
  ProgramMembership: NamedNode<"https://schema.org/ProgramMembership">;
  /** Data type: PronounceableText. */
  PronounceableText: NamedNode<"https://schema.org/PronounceableText">;
  /** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property. */
  Property: NamedNode<"https://schema.org/Property">;
  /** A Property value specification. */
  PropertyValueSpecification: NamedNode<
    "http://schema.org/PropertyValueSpecification"
  >;
  /** Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein in human (UniProt P05067), eukaryota (e.g. an OrthoDB group) or even a single molecule that one can point to are all of type schema:Protein. A protein can thus be a subclass of another protein, e.g. schema:Protein as a UniProt record can have multiple isoforms inside it which would also be schema:Protein. They can be imagined, synthetic, hypothetical or naturally occurring. */
  Protein: NamedNode<"https://schema.org/Protein">;
  /** Single-celled organism that causes an infection. */
  Protozoa: NamedNode<"https://schema.org/Protozoa">;
  /** A specific branch of medical science that is concerned with the study, treatment, and prevention of mental illness, using both medical and psychological therapies. */
  Psychiatric: NamedNode<"https://schema.org/Psychiatric">;
  /** A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition without use of drugs. */
  PsychologicalTreatment: NamedNode<
    "https://schema.org/PsychologicalTreatment"
  >;
  /** Branch of medicine that pertains to the health services to improve and protect community health, especially epidemiology, sanitation, immunization, and preventive medicine. */
  PublicHealth: NamedNode<"https://schema.org/PublicHealth">;
  /** This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a "day of the week", it can be used with [[OpeningHoursSpecification]]. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs. */
  PublicHolidays: NamedNode<"https://schema.org/PublicHolidays">;
  /** A public swimming pool. */
  PublicSwimmingPool: NamedNode<"https://schema.org/PublicSwimmingPool">;
  /** A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses. */
  PublicToilet: NamedNode<"https://schema.org/PublicToilet">;
  /** A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
  PublicationVolume: NamedNode<"https://schema.org/PublicationVolume">;
  /** A specific branch of medical science that pertains to the study of the respiratory system and its respective disease states. */
  Pulmonary: NamedNode<"https://schema.org/Pulmonary">;
  /** A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs). */
  QAPage: NamedNode<"https://schema.org/QAPage">;
  /**  A point value or interval for product characteristics and other purposes. */
  QuantitativeValue: NamedNode<"https://schema.org/QuantitativeValue">;
  /** A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. */
  Question: NamedNode<"https://schema.org/Question">;
  /** Quiz: A test of knowledge, skills and abilities. */
  Quiz: NamedNode<"https://schema.org/Quiz">;
  /** A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]]. */
  Quotation: NamedNode<"https://schema.org/Quotation">;
  /** An agent quotes/estimates/appraises an object/product/service with a price at a location/store. */
  QuoteAction: NamedNode<"https://schema.org/QuoteAction">;
  /** A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like. */
  RVPark: NamedNode<"https://schema.org/RVPark">;
  /** A process of care using radiation aimed at improving a health condition. */
  RadiationTherapy: NamedNode<"https://schema.org/RadiationTherapy">;
  /** A delivery service through which radio content is provided via broadcast over the air or online. */
  RadioBroadcastService: NamedNode<"https://schema.org/RadioBroadcastService">;
  /** A short radio program or a segment/part of a radio program. */
  RadioClip: NamedNode<"https://schema.org/RadioClip">;
  /** A radio episode which can be part of a series or season. */
  RadioEpisode: NamedNode<"https://schema.org/RadioEpisode">;
  /** Season dedicated to radio broadcast and associated online delivery. */
  RadioSeason: NamedNode<"https://schema.org/RadioSeason">;
  /** CreativeWorkSeries dedicated to radio broadcast and associated online delivery. */
  RadioSeries: NamedNode<"https://schema.org/RadioSeries">;
  /** A radio station. */
  RadioStation: NamedNode<"https://schema.org/RadioStation">;
  /** Radiography is an imaging technique that uses electromagnetic radiation other than visible light, especially X-rays, to view the internal structure of a non-uniformly composed and opaque object such as the human body. */
  Radiography: NamedNode<"https://schema.org/Radiography">;
  /** A randomized trial design. */
  RandomizedTrial: NamedNode<"https://schema.org/RandomizedTrial">;
  /** The act of consuming written content. */
  ReadAction: NamedNode<"https://schema.org/ReadAction">;
  /** Permission to read or view the document. */
  ReadPermission: NamedNode<"https://schema.org/ReadPermission">;
  /** A real-estate agent. */
  RealEstateAgent: NamedNode<"https://schema.org/RealEstateAgent">;
  /**
   * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
   *   The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
   *
   */
  RealEstateListing: NamedNode<"https://schema.org/RealEstateListing">;
  /** Real-wheel drive is a transmission layout where the engine drives the rear wheels. */
  RearWheelDriveConfiguration: NamedNode<
    "http://schema.org/RearWheelDriveConfiguration"
  >;
  /** The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transferred (e.g. I can receive a package, but it does not mean the package is now mine). */
  ReceiveAction: NamedNode<"https://schema.org/ReceiveAction">;
  /** A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail. */
  Recipe: NamedNode<"https://schema.org/Recipe">;
  /** [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s. */
  Recommendation: NamedNode<"https://schema.org/Recommendation">;
  /** A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
  RecommendedDoseSchedule: NamedNode<
    "http://schema.org/RecommendedDoseSchedule"
  >;
  /** Recruiting participants. */
  Recruiting: NamedNode<"https://schema.org/Recruiting">;
  /** A recycling center. */
  RecyclingCenter: NamedNode<"https://schema.org/RecyclingCenter">;
  /** A general code for cases where relevance to children is reduced, e.g. adult education, mortgages, retirement-related products, etc. */
  ReducedRelevanceForChildrenConsideration: NamedNode<
    "http://schema.org/ReducedRelevanceForChildrenConsideration"
  >;
  /** Indicates that the item is refurbished. */
  RefurbishedCondition: NamedNode<"https://schema.org/RefurbishedCondition">;
  /** The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object. */
  RegisterAction: NamedNode<"https://schema.org/RegisterAction">;
  /** A registry-based study design. */
  Registry: NamedNode<"https://schema.org/Registry">;
  /** The drug's cost represents the maximum reimbursement paid by an insurer for the drug. */
  ReimbursementCap: NamedNode<"https://schema.org/ReimbursementCap">;
  /** The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction. */
  RejectAction: NamedNode<"https://schema.org/RejectAction">;
  /** Other prominent or relevant topics tied to the main topic. */
  RelatedTopicsHealthAspect: NamedNode<
    "http://schema.org/RelatedTopicsHealthAspect"
  >;
  /** RemixAlbum. */
  RemixAlbum: NamedNode<"https://schema.org/RemixAlbum">;
  /** A specific branch of medical science that pertains to the study of the kidneys and its respective disease states. */
  Renal: NamedNode<"https://schema.org/Renal">;
  /** The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment. */
  RentAction: NamedNode<"https://schema.org/RentAction">;
  /** A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. */
  RentalCarReservation: NamedNode<"https://schema.org/RentalCarReservation">;
  /** Indicates the usage of the vehicle as a rental car. */
  RentalVehicleUsage: NamedNode<"https://schema.org/RentalVehicleUsage">;
  /** A structured value representing repayment. */
  RepaymentSpecification: NamedNode<
    "https://schema.org/RepaymentSpecification"
  >;
  /** The act of editing a recipient by replacing an old object with a new object. */
  ReplaceAction: NamedNode<"https://schema.org/ReplaceAction">;
  /** The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction. */
  ReplyAction: NamedNode<"https://schema.org/ReplyAction">;
  /** A Report generated by governmental or non-governmental organization. */
  Report: NamedNode<"https://schema.org/Report">;
  /**
   * The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing
   *  news articles which are the result of journalistic news reporting conventions.
   *
   * In practice many news publishers produce a wide variety of article types, many of which might be considered a [[NewsArticle]] but not a [[ReportageNewsArticle]]. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.
   *
   * The [[ReportageNewsArticle]] type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources.  This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda).  News reports in the [[ReportageNewsArticle]] sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.
   *
   * A [[ReportageNewsArticle]] which goes deeper into analysis can also be marked with an additional type of [[AnalysisNewsArticle]].
   *
   */
  ReportageNewsArticle: NamedNode<"https://schema.org/ReportageNewsArticle">;
  /** A patient-reported or observed dosing schedule for a drug or supplement. */
  ReportedDoseSchedule: NamedNode<"https://schema.org/ReportedDoseSchedule">;
  /** A Research Organization (e.g. scientific institute, research company). */
  ResearchOrganization: NamedNode<"https://schema.org/ResearchOrganization">;
  /** A Research project. */
  ResearchProject: NamedNode<"https://schema.org/ResearchProject">;
  /** Researchers. */
  Researcher: NamedNode<"https://schema.org/Researcher">;
  /** The status for a previously confirmed reservation that is now cancelled. */
  ReservationCancelled: NamedNode<"https://schema.org/ReservationCancelled">;
  /** Enumerated status values for Reservation. */
  ReservationStatusType: NamedNode<"https://schema.org/ReservationStatusType">;
  /** The status of a confirmed reservation. */
  ReservationConfirmed: NamedNode<"https://schema.org/ReservationConfirmed">;
  /** The status of a reservation on hold pending an update like credit card number or flight changes. */
  ReservationHold: NamedNode<"https://schema.org/ReservationHold">;
  /** A group of multiple reservations with common values for all sub-reservations. */
  ReservationPackage: NamedNode<"https://schema.org/ReservationPackage">;
  /** The status of a reservation when a request has been sent, but not confirmed. */
  ReservationPending: NamedNode<"https://schema.org/ReservationPending">;
  /** Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation. */
  ReserveAction: NamedNode<"https://schema.org/ReserveAction">;
  /** A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir. */
  Reservoir: NamedNode<"https://schema.org/Reservoir">;
  /**
   * A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishments operated by a single company (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Resort: NamedNode<"https://schema.org/Resort">;
  /** The therapy that is concerned with the maintenance or improvement of respiratory function (as in patients with pulmonary disease). */
  RespiratoryTherapy: NamedNode<"https://schema.org/RespiratoryTherapy">;
  /** A restaurant. */
  Restaurant: NamedNode<"https://schema.org/Restaurant">;
  /** Specifies that the customer must pay a restocking fee when returning a product. */
  RestockingFees: NamedNode<"https://schema.org/RestockingFees">;
  /** Results are available. */
  ResultsAvailable: NamedNode<"https://schema.org/ResultsAvailable">;
  /** Results are not available. */
  ResultsNotAvailable: NamedNode<"https://schema.org/ResultsNotAvailable">;
  /** The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer). */
  ResumeAction: NamedNode<"https://schema.org/ResumeAction">;
  /** The drug's cost represents the retail cost of the drug. */
  Retail: NamedNode<"https://schema.org/Retail">;
  /** The act of returning to the origin that which was previously received (concrete objects) or taken (ownership). */
  ReturnAction: NamedNode<"https://schema.org/ReturnAction">;
  /** Specifies that product returns must be made at a kiosk. */
  ReturnAtKiosk: NamedNode<"https://schema.org/ReturnAtKiosk">;
  /** Enumerates several types of product return methods. */
  ReturnMethodEnumeration: NamedNode<
    "http://schema.org/ReturnMethodEnumeration"
  >;
  /** Specifies that product returns must be done by mail. */
  ReturnByMail: NamedNode<"https://schema.org/ReturnByMail">;
  /** Specifies that product returns must be paid for, and are the responsibility of, the customer. */
  ReturnFeesCustomerResponsibility: NamedNode<
    "http://schema.org/ReturnFeesCustomerResponsibility"
  >;
  /** Specifies that product returns must be made in a store. */
  ReturnInStore: NamedNode<"https://schema.org/ReturnInStore">;
  /** Indicated that creating a return label is the responsibility of the customer. */
  ReturnLabelCustomerResponsibility: NamedNode<
    "http://schema.org/ReturnLabelCustomerResponsibility"
  >;
  /** Enumerates several types of return labels for product returns. */
  ReturnLabelSourceEnumeration: NamedNode<
    "http://schema.org/ReturnLabelSourceEnumeration"
  >;
  /** Indicated that a return label must be downloaded and printed by the customer. */
  ReturnLabelDownloadAndPrint: NamedNode<
    "http://schema.org/ReturnLabelDownloadAndPrint"
  >;
  /** Specifies that a return label will be provided by the seller in the shipping box. */
  ReturnLabelInBox: NamedNode<"https://schema.org/ReturnLabelInBox">;
  /** Specifies that the customer must pay the return shipping costs when returning a product. */
  ReturnShippingFees: NamedNode<"https://schema.org/ReturnShippingFees">;
  /** The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review. */
  ReviewAction: NamedNode<"https://schema.org/ReviewAction">;
  /** A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work. */
  ReviewNewsArticle: NamedNode<"https://schema.org/ReviewNewsArticle">;
  /** A specific branch of medical science that deals with the study and treatment of rheumatic, autoimmune or joint diseases. */
  Rheumatologic: NamedNode<"https://schema.org/Rheumatologic">;
  /** The steering position is on the right side of the vehicle (viewed from the main direction of driving). */
  RightHandDriving: NamedNode<"https://schema.org/RightHandDriving">;
  /** Information about the risk factors and possible complications that may follow a topic. */
  RisksOrComplicationsHealthAspect: NamedNode<
    "http://schema.org/RisksOrComplicationsHealthAspect"
  >;
  /** A river (for example, the broad majestic Shannon). */
  RiverBodyOfWater: NamedNode<"https://schema.org/RiverBodyOfWater">;
  /** A roofing contractor. */
  RoofingContractor: NamedNode<"https://schema.org/RoofingContractor">;
  /** The act of notifying an event organizer as to whether you expect to attend the event. */
  RsvpAction: NamedNode<"https://schema.org/RsvpAction">;
  /** The invitee may or may not attend. */
  RsvpResponseMaybe: NamedNode<"https://schema.org/RsvpResponseMaybe">;
  /** RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request. */
  RsvpResponseType: NamedNode<"https://schema.org/RsvpResponseType">;
  /** The invitee will not attend. */
  RsvpResponseNo: NamedNode<"https://schema.org/RsvpResponseNo">;
  /** The invitee will attend. */
  RsvpResponseYes: NamedNode<"https://schema.org/RsvpResponseYes">;
  /** Represents the suggested retail price ("SRP") of an offered product. */
  SRP: NamedNode<"https://schema.org/SRP">;
  /** Content about the safety-related aspects of a health topic. */
  SafetyHealthAspect: NamedNode<"https://schema.org/SafetyHealthAspect">;
  /** Event type: Sales event. */
  SaleEvent: NamedNode<"https://schema.org/SaleEvent">;
  /** Represents a sale price (usually active for a limited period) of an offered product. */
  SalePrice: NamedNode<"https://schema.org/SalePrice">;
  /**
   * Content coded 'satire or parody content' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'satire or parody content': A video that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)
   *
   * For an [[ImageObject]] to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)
   *
   * For an [[ImageObject]] with embedded text to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)
   *
   * For an [[AudioObject]] to be 'satire or parody content': Audio that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)
   *
   */
  SatireOrParodyContent: NamedNode<"https://schema.org/SatireOrParodyContent">;
  /** An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a [[NewsArticle]]. [[ScholarlyArticle]]s are also sometimes satirized. */
  SatiricalArticle: NamedNode<"https://schema.org/SatiricalArticle">;
  /** The day of the week between Friday and Sunday. */
  Saturday: NamedNode<"https://schema.org/Saturday">;
  /**
   * A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurrences of the event. Additional information can be provided to specify the schedule more precisely.
   *       This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
   *       have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
   */
  Schedule: NamedNode<"https://schema.org/Schedule">;
  /** Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation. */
  ScheduleAction: NamedNode<"https://schema.org/ScheduleAction">;
  /** A school. */
  School: NamedNode<"https://schema.org/School">;
  /** A School District is an administrative area for the administration of schools. */
  SchoolDistrict: NamedNode<"https://schema.org/SchoolDistrict">;
  /** A screening of a movie or other video. */
  ScreeningEvent: NamedNode<"https://schema.org/ScreeningEvent">;
  /** Content about how to screen or further filter a topic. */
  ScreeningHealthAspect: NamedNode<"https://schema.org/ScreeningHealthAspect">;
  /** A piece of sculpture. */
  Sculpture: NamedNode<"https://schema.org/Sculpture">;
  /** A sea (for example, the Caspian sea). */
  SeaBodyOfWater: NamedNode<"https://schema.org/SeaBodyOfWater">;
  /** The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily. */
  SearchAction: NamedNode<"https://schema.org/SearchAction">;
  /** A Search and Rescue organization of some kind. */
  SearchRescueOrganization: NamedNode<
    "http://schema.org/SearchRescueOrganization"
  >;
  /** Web page type: Search results page. */
  SearchResultsPage: NamedNode<"https://schema.org/SearchResultsPage">;
  /** A media season, e.g. TV, radio, video game etc. */
  Season: NamedNode<"https://schema.org/Season">;
  /** Used to describe a seat, such as a reserved seat in an event reservation. */
  Seat: NamedNode<"https://schema.org/Seat">;
  /** A seating map. */
  SeatingMap: NamedNode<"https://schema.org/SeatingMap">;
  /** Information about questions that may be asked, when to see a professional, measures before seeing a doctor or content about the first consultation. */
  SeeDoctorHealthAspect: NamedNode<"https://schema.org/SeeDoctorHealthAspect">;
  /** This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure. */
  SeekToAction: NamedNode<"https://schema.org/SeekToAction">;
  /** Self care actions or measures that can be taken to sooth, health or avoid a topic. This may be carried at home and can be carried/managed by the person itself. */
  SelfCareHealthAspect: NamedNode<"https://schema.org/SelfCareHealthAspect">;
  /** A self-storage facility. */
  SelfStorage: NamedNode<"https://schema.org/SelfStorage">;
  /** The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction. */
  SellAction: NamedNode<"https://schema.org/SellAction">;
  /** The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you). */
  SendAction: NamedNode<"https://schema.org/SendAction">;
  /** A means for accessing a service, e.g. a government office location, web site, or phone number. */
  ServiceChannel: NamedNode<"https://schema.org/ServiceChannel">;
  /** The item contains sexually oriented content such as nudity, suggestive or explicit material, or related online services, or is intended to enhance sexual activity. Examples: Erotic videos or magazine, sexual enhancement devices, sex toys. */
  SexualContentConsideration: NamedNode<
    "http://schema.org/SexualContentConsideration"
  >;
  /** The act of distributing content to people for their amusement or edification. */
  ShareAction: NamedNode<"https://schema.org/ShareAction">;
  /** Printed music, as opposed to performed or recorded music. */
  SheetMusic: NamedNode<"https://schema.org/SheetMusic">;
  /** ShippingDeliveryTime provides various pieces of information about delivery times for shipping. */
  ShippingDeliveryTime: NamedNode<"https://schema.org/ShippingDeliveryTime">;
  /** A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]]. */
  ShippingRateSettings: NamedNode<"https://schema.org/ShippingRateSettings">;
  /** A shoe store. */
  ShoeStore: NamedNode<"https://schema.org/ShoeStore">;
  /** A shopping center or mall. */
  ShoppingCenter: NamedNode<"https://schema.org/ShoppingCenter">;
  /** Short story or tale. A brief work of literature, usually written in narrative prose. */
  ShortStory: NamedNode<"https://schema.org/ShortStory">;
  /** Side effects that can be observed from the usage of the topic. */
  SideEffectsHealthAspect: NamedNode<
    "http://schema.org/SideEffectsHealthAspect"
  >;
  /** A trial design in which the researcher knows which treatment the patient was randomly assigned to but the patient does not. */
  SingleBlindedTrial: NamedNode<"https://schema.org/SingleBlindedTrial">;
  /** A trial that takes place at a single center. */
  SingleCenterTrial: NamedNode<"https://schema.org/SingleCenterTrial">;
  /** Residence type: Single-family home. */
  SingleFamilyResidence: NamedNode<"https://schema.org/SingleFamilyResidence">;
  /** Play mode: SinglePlayer. Which is played by a lone player. */
  SinglePlayer: NamedNode<"https://schema.org/SinglePlayer">;
  /** SingleRelease. */
  SingleRelease: NamedNode<"https://schema.org/SingleRelease">;
  /** A navigation element of the page. */
  SiteNavigationElement: NamedNode<"https://schema.org/SiteNavigationElement">;
  /** A web page element, like a table or an image. */
  WebPageElement: NamedNode<"https://schema.org/WebPageElement">;
  /** Enumerates common size groups for various product categories. */
  SizeGroupEnumeration: NamedNode<"https://schema.org/SizeGroupEnumeration">;
  /** Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]). */
  SizeSpecification: NamedNode<"https://schema.org/SizeSpecification">;
  /** Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws. */
  SizeSystemEnumeration: NamedNode<"https://schema.org/SizeSystemEnumeration">;
  /** Imperial size system. */
  SizeSystemImperial: NamedNode<"https://schema.org/SizeSystemImperial">;
  /** Metric size system. */
  SizeSystemMetric: NamedNode<"https://schema.org/SizeSystemMetric">;
  /** A ski resort. */
  SkiResort: NamedNode<"https://schema.org/SkiResort">;
  /** Skin assessment with clinical examination. */
  Skin: NamedNode<"https://schema.org/Skin">;
  /** Event type: Social event. */
  SocialEvent: NamedNode<"https://schema.org/SocialEvent">;
  /** Indicates that the item has sold out. */
  SoldOut: NamedNode<"https://schema.org/SoldOut">;
  /** The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression. */
  SolveMathAction: NamedNode<"https://schema.org/SolveMathAction">;
  /** A placeholder for multiple similar products of the same kind. */
  SomeProducts: NamedNode<"https://schema.org/SomeProducts">;
  /** SoundtrackAlbum. */
  SoundtrackAlbum: NamedNode<"https://schema.org/SoundtrackAlbum">;
  /** A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property. */
  SpeakableSpecification: NamedNode<
    "https://schema.org/SpeakableSpecification"
  >;
  /**
   * A SpecialAnnouncement combines a simple date-stamped textual information update
   *       with contextualized Web links and other structured data.  It represents an information update made by a
   *       locally-oriented organization, for example schools, pharmacies, healthcare providers,  community groups, police,
   *       local government.
   *
   * For work in progress guidelines on Coronavirus-related markup see [this doc](https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit#).
   *
   * The motivating scenario for SpecialAnnouncement is the [Coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), and the initial vocabulary is oriented to this urgent situation. Schema.org
   * expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our
   * usual [Github entry](https://github.com/schemaorg/schemaorg/issues/2490), feedback comments can also be provided in [this document](https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit#).
   *
   *
   * While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like [CAP](https://en.wikipedia.org/wiki/Common_Alerting_Protocol), although there may be overlaps. The intent is to cover
   * the kinds of everyday practical information being posted to existing websites during an emergency situation.
   *
   * Several kinds of information can be provided:
   *
   * We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and
   * "url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known
   * URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".
   *
   * For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a [[WebContent]] type, and provide the url as a property of that, alongside at least a simple "[[text]]" summary of the page. It is
   * unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.
   *
   * We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, [[openingHours]], [[Event]], [[FAQPage]] etc. By linking to those pages from a [[SpecialAnnouncement]] you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the [[category]] property of the [[SpecialAnnouncement]].
   *
   * Many [[SpecialAnnouncement]]s will relate to particular regions and to identifiable local organizations. Use [[spatialCoverage]] for the region, and [[announcementLocation]] to indicate specific [[LocalBusiness]]es and [[CivicStructure]]s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both [[spatialCoverage]] and [[announcementLocation]].
   *
   * The [[about]] property can be used to indicate entities that are the focus of the announcement. We now recommend using [[about]] only
   * for representing non-location entities (e.g. a [[Course]] or a [[RadioStation]]). For places, use [[announcementLocation]] and [[spatialCoverage]]. Consumers of this markup should be aware that the initial design encouraged the use of [[about]] for locations too.
   *
   * The basic content of [[SpecialAnnouncement]] is similar to that of an [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed. For publishers without such feeds, basic feed-like information can be shared by posting
   * [[SpecialAnnouncement]] updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed
   * with the [[webFeed]] property. This can be a simple URL, or an inline [[DataFeed]] object, with [[encodingFormat]] providing
   * media type information, e.g. "application/rss+xml" or "application/atom+xml".
   *
   */
  SpecialAnnouncement: NamedNode<"https://schema.org/SpecialAnnouncement">;
  /** The scientific study and treatment of defects, disorders, and malfunctions of speech and voice, as stuttering, lisping, or lalling, and of language disturbances, as aphasia or delayed language acquisition. */
  SpeechPathology: NamedNode<"https://schema.org/SpeechPathology">;
  /** SpokenWordAlbum. */
  SpokenWordAlbum: NamedNode<"https://schema.org/SpokenWordAlbum">;
  /** A sporting goods store. */
  SportingGoodsStore: NamedNode<"https://schema.org/SportingGoodsStore">;
  /** A sports club. */
  SportsClub: NamedNode<"https://schema.org/SportsClub">;
  /** Event type: Sports event. */
  SportsEvent: NamedNode<"https://schema.org/SportsEvent">;
  /** Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations. */
  SportsOrganization: NamedNode<"https://schema.org/SportsOrganization">;
  /** Organization: Sports team. */
  SportsTeam: NamedNode<"https://schema.org/SportsTeam">;
  /** A spreadsheet file. */
  SpreadsheetDigitalDocument: NamedNode<
    "http://schema.org/SpreadsheetDigitalDocument"
  >;
  /** A stadium. */
  StadiumOrArena: NamedNode<"https://schema.org/StadiumOrArena">;
  /**
   * Content coded 'staged content' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'staged content': A video that has been created using actors or similarly contrived.
   *
   * For an [[ImageObject]] to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.
   *
   * For an [[ImageObject]] with embedded text to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.
   *
   * For an [[AudioObject]] to be 'staged content': Audio that has been created using actors or similarly contrived.
   *
   */
  StagedContent: NamedNode<"https://schema.org/StagedContent">;
  /** Stages that can be observed from a topic. */
  StagesHealthAspect: NamedNode<"https://schema.org/StagesHealthAspect">;
  /** A state or province of a country. */
  State: NamedNode<"https://schema.org/State">;
  /** A statement about something, for example a fun or interesting fact. If known, the main entity this statement is about can be indicated using mainEntity. For more formal claims (e.g. in Fact Checking), consider using [[Claim]] instead. Use the [[text]] property to capture the text of the statement. */
  Statement: NamedNode<"https://schema.org/Statement">;
  /**
   * A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property [[populationType]] is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a [[StatisticalPopulation]] representing all [[Person]]s with a [[homeLocation]] of East Podunk California would be described by applying the appropriate [[homeLocation]] and [[populationType]] properties to a [[StatisticalPopulation]] item that stands for that set of people.
   * The properties [[numConstraints]] and [[constrainingProperty]] are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical
   * population, and does not imply that the population consists of people. For example, a [[populationType]] of [[Event]] or [[NewsArticle]] could be used. See also [[Observation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
   *
   */
  StatisticalPopulation: NamedNode<"https://schema.org/StatisticalPopulation">;
  /** Specifies that the customer receives a store credit as refund when returning a product. */
  StoreCreditRefund: NamedNode<"https://schema.org/StoreCreditRefund">;
  /** Physical activity that is engaged in to improve muscle and bone strength. Also referred to as resistance training. */
  StrengthTraining: NamedNode<"https://schema.org/StrengthTraining">;
  /** StudioAlbum. */
  StudioAlbum: NamedNode<"https://schema.org/StudioAlbum">;
  /** The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object. */
  SubscribeAction: NamedNode<"https://schema.org/SubscribeAction">;
  /** Represents the subscription pricing component of the total price for an offered product. */
  Subscription: NamedNode<"https://schema.org/Subscription">;
  /** A subway station. */
  SubwayStation: NamedNode<"https://schema.org/SubwayStation">;
  /**
   * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
   * <br /><br />
   * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
   *
   */
  Suite: NamedNode<"https://schema.org/Suite">;
  /** The day of the week between Saturday and Monday. */
  Sunday: NamedNode<"https://schema.org/Sunday">;
  /** Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure). */
  SuperficialAnatomy: NamedNode<"https://schema.org/SuperficialAnatomy">;
  /** A specific branch of medical science that pertains to treating diseases, injuries and deformities by manual and instrumental means. */
  Surgical: NamedNode<"https://schema.org/Surgical">;
  /** A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes. */
  SurgicalProcedure: NamedNode<"https://schema.org/SurgicalProcedure">;
  /** The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer). */
  SuspendAction: NamedNode<"https://schema.org/SuspendAction">;
  /** Suspended. */
  Suspended: NamedNode<"https://schema.org/Suspended">;
  /** Symptoms or related symptoms of a Topic. */
  SymptomsHealthAspect: NamedNode<"https://schema.org/SymptomsHealthAspect">;
  /** A synagogue. */
  Synagogue: NamedNode<"https://schema.org/Synagogue">;
  /** A short TV program or a segment/part of a TV program. */
  TVClip: NamedNode<"https://schema.org/TVClip">;
  /** A TV episode which can be part of a series or season. */
  TVEpisode: NamedNode<"https://schema.org/TVEpisode">;
  /** Season dedicated to TV broadcast and associated online delivery. */
  TVSeason: NamedNode<"https://schema.org/TVSeason">;
  /** CreativeWorkSeries dedicated to TV broadcast and associated online delivery. */
  TVSeries: NamedNode<"https://schema.org/TVSeries">;
  /** A table on a Web page. */
  Table: NamedNode<"https://schema.org/Table">;
  /** The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transferred. */
  TakeAction: NamedNode<"https://schema.org/TakeAction">;
  /** A tattoo parlor. */
  TattooParlor: NamedNode<"https://schema.org/TattooParlor">;
  /** A taxi. */
  Taxi: NamedNode<"https://schema.org/Taxi">;
  /** A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled. */
  TaxiService: NamedNode<"https://schema.org/TaxiService">;
  /** A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
  TaxiReservation: NamedNode<"https://schema.org/TaxiReservation">;
  /** A taxi stand. */
  TaxiStand: NamedNode<"https://schema.org/TaxiStand">;
  /** Indicates the usage of the car as a taxi. */
  TaxiVehicleUsage: NamedNode<"https://schema.org/TaxiVehicleUsage">;
  /** A set of organisms asserted to represent a natural cohesive biological unit. */
  Taxon: NamedNode<"https://schema.org/Taxon">;
  /** A unique instance of a television BroadcastService on a CableOrSatelliteService lineup. */
  TelevisionChannel: NamedNode<"https://schema.org/TelevisionChannel">;
  /** A television station. */
  TelevisionStation: NamedNode<"https://schema.org/TelevisionStation">;
  /** A tennis complex. */
  TennisComplex: NamedNode<"https://schema.org/TennisComplex">;
  /** Terminated. */
  Terminated: NamedNode<"https://schema.org/Terminated">;
  /** A file composed primarily of text. */
  TextDigitalDocument: NamedNode<"https://schema.org/TextDigitalDocument">;
  /** Event type: Theater performance. */
  TheaterEvent: NamedNode<"https://schema.org/TheaterEvent">;
  /** A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre. */
  TheaterGroup: NamedNode<"https://schema.org/TheaterGroup">;
  /** A medical device used for therapeutic purposes. */
  Therapeutic: NamedNode<"https://schema.org/Therapeutic">;
  /** A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification. */
  Thesis: NamedNode<"https://schema.org/Thesis">;
  /** Throat assessment with  clinical examination. */
  Throat: NamedNode<"https://schema.org/Throat">;
  /** The day of the week between Wednesday and Friday. */
  Thursday: NamedNode<"https://schema.org/Thursday">;
  /** Used to describe a ticket to an event, a flight, a bus ride, etc. */
  Ticket: NamedNode<"https://schema.org/Ticket">;
  /** The act of reaching a draw in a competitive activity. */
  TieAction: NamedNode<"https://schema.org/TieAction">;
  /** A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time)). */
  Time: NamedNode<"https://schema.org/Time">;
  /** The act of giving money voluntarily to a beneficiary in recognition of services rendered. */
  TipAction: NamedNode<"https://schema.org/TipAction">;
  /** A tire shop. */
  TireShop: NamedNode<"https://schema.org/TireShop">;
  /** Item contains tobacco and/or nicotine, for example cigars, cigarettes, chewing tobacco, e-cigarettes, or hookahs. */
  TobaccoNicotineConsideration: NamedNode<
    "http://schema.org/TobaccoNicotineConsideration"
  >;
  /** The associated telephone number is toll free. */
  TollFree: NamedNode<"https://schema.org/TollFree">;
  /** A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below) */
  TouristAttraction: NamedNode<"https://schema.org/TouristAttraction">;
  /**
   * A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
   *   (See examples below.)
   */
  TouristDestination: NamedNode<"https://schema.org/TouristDestination">;
  /** A tourist information center. */
  TouristInformationCenter: NamedNode<
    "http://schema.org/TouristInformationCenter"
  >;
  /**
   * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
   *   (See examples below.)
   */
  TouristTrip: NamedNode<"https://schema.org/TouristTrip">;
  /** A specific branch of medical science that is concerned with poisons, their nature, effects and detection and involved in the treatment of poisoning. */
  Toxicologic: NamedNode<"https://schema.org/Toxicologic">;
  /** A toy store. */
  ToyStore: NamedNode<"https://schema.org/ToyStore">;
  /** An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects. */
  TrackAction: NamedNode<"https://schema.org/TrackAction">;
  /** A system of medicine based on common theoretical concepts that originated in China and evolved over thousands of years, that uses herbs, acupuncture, exercise, massage, dietary therapy, and other methods to treat a wide range of conditions. */
  TraditionalChinese: NamedNode<"https://schema.org/TraditionalChinese">;
  /** A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
  TrainReservation: NamedNode<"https://schema.org/TrainReservation">;
  /** A train station. */
  TrainStation: NamedNode<"https://schema.org/TrainStation">;
  /** A trip on a commercial train line. */
  TrainTrip: NamedNode<"https://schema.org/TrainTrip">;
  /**
   * Content coded 'transformed content' in a [[MediaReview]], considered in the context of how it was published or shared.
   *
   * For a [[VideoObject]] to be 'transformed content':  or all of the video has been manipulated to transform the footage itself. This category includes using tools like the Adobe Suite to change the speed of the video, add or remove visual elements or dub audio. Deepfakes are also a subset of transformation.
   *
   * For an [[ImageObject]] to be 'transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.
   *
   * For an [[ImageObject]] with embedded text to be 'transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.
   *
   * For an [[AudioObject]] to be 'transformed content': Part or all of the audio has been manipulated to alter the words or sounds, or the audio has been synthetically generated, such as to create a sound-alike voice.
   *
   */
  TransformedContent: NamedNode<"https://schema.org/TransformedContent">;
  /** A transit map. */
  TransitMap: NamedNode<"https://schema.org/TransitMap">;
  /** The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants. */
  TravelAction: NamedNode<"https://schema.org/TravelAction">;
  /** A travel agency. */
  TravelAgency: NamedNode<"https://schema.org/TravelAgency">;
  /** An indication for treating an underlying condition, symptom, etc. */
  TreatmentIndication: NamedNode<"https://schema.org/TreatmentIndication">;
  /** Treatments or related therapies for a Topic. */
  TreatmentsHealthAspect: NamedNode<
    "https://schema.org/TreatmentsHealthAspect"
  >;
  /** A trial design in which neither the researcher, the person administering the therapy nor the patient knows the details of the treatment the patient was randomly assigned to. */
  TripleBlindedTrial: NamedNode<"https://schema.org/TripleBlindedTrial">;
  /** The boolean value true. */
  True: NamedNode<"https://schema.org/True">;
  /** The day of the week between Monday and Wednesday. */
  Tuesday: NamedNode<"https://schema.org/Tuesday">;
  /** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer. */
  TypeAndQuantityNode: NamedNode<"https://schema.org/TypeAndQuantityNode">;
  /** Categorization and other types related to a topic. */
  TypesHealthAspect: NamedNode<"https://schema.org/TypesHealthAspect">;
  /** UKTrust: Non-profit type referring to a UK trust. */
  UKTrust: NamedNode<"https://schema.org/UKTrust">;
  /** Data type: URL. */
  URL: NamedNode<"https://schema.org/URL">;
  /** Ultrasound imaging. */
  Ultrasound: NamedNode<"https://schema.org/Ultrasound">;
  /** The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you were previously registered, rather than leaving a team/group of people. */
  UnRegisterAction: NamedNode<"https://schema.org/UnRegisterAction">;
  /** The item is suitable only for adults, without indicating why. Due to widespread use of "adult" as a euphemism for "sexual", many such items are likely suited also for the SexualContentConsideration code. */
  UnclassifiedAdultConsideration: NamedNode<
    "http://schema.org/UnclassifiedAdultConsideration"
  >;
  /** UnemploymentSupport: this is a benefit for unemployment support. */
  UnemploymentSupport: NamedNode<"https://schema.org/UnemploymentSupport">;
  /** UnincorporatedAssociationCharity: Non-profit type referring to a charitable company that is not incorporated (UK). */
  UnincorporatedAssociationCharity: NamedNode<
    "http://schema.org/UnincorporatedAssociationCharity"
  >;
  /** The price asked for a given offer by the respective organization or person. */
  UnitPriceSpecification: NamedNode<
    "https://schema.org/UnitPriceSpecification"
  >;
  /** Indicates that a document has no particular or special standing (e.g. a republication of a law by a private publisher). */
  UnofficialLegalValue: NamedNode<"https://schema.org/UnofficialLegalValue">;
  /** A specific branch of medical science that is concerned with the diagnosis and treatment of diseases pertaining to the urinary tract and the urogenital system. */
  Urologic: NamedNode<"https://schema.org/Urologic">;
  /** Content about how, when, frequency and dosage of a topic. */
  UsageOrScheduleHealthAspect: NamedNode<
    "http://schema.org/UsageOrScheduleHealthAspect"
  >;
  /** The act of applying an object to its intended purpose. */
  UseAction: NamedNode<"https://schema.org/UseAction">;
  /** Indicates that the item is used. */
  UsedCondition: NamedNode<"https://schema.org/UsedCondition">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserBlocks: NamedNode<"https://schema.org/UserBlocks">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserInteraction: NamedNode<"https://schema.org/UserInteraction">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserCheckins: NamedNode<"https://schema.org/UserCheckins">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserComments: NamedNode<"https://schema.org/UserComments">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserDownloads: NamedNode<"https://schema.org/UserDownloads">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserLikes: NamedNode<"https://schema.org/UserLikes">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserPageVisits: NamedNode<"https://schema.org/UserPageVisits">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserPlays: NamedNode<"https://schema.org/UserPlays">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserPlusOnes: NamedNode<"https://schema.org/UserPlusOnes">;
  /** A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]]. */
  UserReview: NamedNode<"https://schema.org/UserReview">;
  /** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
  UserTweets: NamedNode<"https://schema.org/UserTweets">;
  /** A diet exclusive of all animal products. */
  VeganDiet: NamedNode<"https://schema.org/VeganDiet">;
  /** A diet exclusive of animal meat. */
  VegetarianDiet: NamedNode<"https://schema.org/VegetarianDiet">;
  /** A type of blood vessel that specifically carries blood to the heart. */
  Vein: NamedNode<"https://schema.org/Vein">;
  /** A venue map (e.g. for malls, auditoriums, museums, etc.). */
  VenueMap: NamedNode<"https://schema.org/VenueMap">;
  /** A vet's office. */
  VeterinaryCare: NamedNode<"https://schema.org/VeterinaryCare">;
  /** Web page type: Video gallery page. */
  VideoGallery: NamedNode<"https://schema.org/VideoGallery">;
  /** A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device. */
  VideoGame: NamedNode<"https://schema.org/VideoGame">;
  /** A short segment/part of a video game. */
  VideoGameClip: NamedNode<"https://schema.org/VideoGameClip">;
  /** A video game series. */
  VideoGameSeries: NamedNode<"https://schema.org/VideoGameSeries">;
  /** A video file. */
  VideoObject: NamedNode<"https://schema.org/VideoObject">;
  /** A specific and exact (byte-for-byte) version of a [[VideoObject]]. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
  VideoObjectSnapshot: NamedNode<"https://schema.org/VideoObjectSnapshot">;
  /** The act of consuming static visual content. */
  ViewAction: NamedNode<"https://schema.org/ViewAction">;
  /** VinylFormat. */
  VinylFormat: NamedNode<"https://schema.org/VinylFormat">;
  /** Item shows or promotes violence. */
  ViolenceConsideration: NamedNode<"https://schema.org/ViolenceConsideration">;
  /** An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world. */
  VirtualLocation: NamedNode<"https://schema.org/VirtualLocation">;
  /** Pathogenic virus that causes viral infection. */
  Virus: NamedNode<"https://schema.org/Virus">;
  /** Event type: Visual arts event. */
  VisualArtsEvent: NamedNode<"https://schema.org/VisualArtsEvent">;
  /** Vital signs are measures of various physiological functions in order to assess the most basic body functions. */
  VitalSign: NamedNode<"https://schema.org/VitalSign">;
  /** A volcano, like Fujisan. */
  Volcano: NamedNode<"https://schema.org/Volcano">;
  /** The act of expressing a preference from a fixed/finite/structured set of choices/options. */
  VoteAction: NamedNode<"https://schema.org/VoteAction">;
  /** An advertising section of the page. */
  WPAdBlock: NamedNode<"https://schema.org/WPAdBlock">;
  /** The footer section of the page. */
  WPFooter: NamedNode<"https://schema.org/WPFooter">;
  /** The header section of the page. */
  WPHeader: NamedNode<"https://schema.org/WPHeader">;
  /** A sidebar section of the page. */
  WPSideBar: NamedNode<"https://schema.org/WPSideBar">;
  /** The act of expressing a desire about the object. An agent wants an object. */
  WantAction: NamedNode<"https://schema.org/WantAction">;
  /** A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product. */
  WarrantyPromise: NamedNode<"https://schema.org/WarrantyPromise">;
  /**
   * A range of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
   *
   */
  WarrantyScope: NamedNode<"https://schema.org/WarrantyScope">;
  /** The act of consuming dynamic/moving visual content. */
  WatchAction: NamedNode<"https://schema.org/WatchAction">;
  /** A waterfall, like Niagara. */
  Waterfall: NamedNode<"https://schema.org/Waterfall">;
  /** The item is intended to induce bodily harm, for example guns, mace, combat knives, brass knuckles, nail or other bombs, and spears. */
  WeaponConsideration: NamedNode<"https://schema.org/WeaponConsideration">;
  /** The act of dressing oneself in clothing. */
  WearAction: NamedNode<"https://schema.org/WearAction">;
  /** Measurement of the back section, for example of a jacket */
  WearableMeasurementBack: NamedNode<
    "http://schema.org/WearableMeasurementBack"
  >;
  /** Enumerates common types of measurement for wearables products. */
  WearableMeasurementTypeEnumeration: NamedNode<
    "http://schema.org/WearableMeasurementTypeEnumeration"
  >;
  /** Measurement of the chest/bust section, for example of a suit */
  WearableMeasurementChestOrBust: NamedNode<
    "http://schema.org/WearableMeasurementChestOrBust"
  >;
  /** Measurement of the collar, for example of a shirt */
  WearableMeasurementCollar: NamedNode<
    "http://schema.org/WearableMeasurementCollar"
  >;
  /** Measurement of the cup, for example of a bra */
  WearableMeasurementCup: NamedNode<
    "https://schema.org/WearableMeasurementCup"
  >;
  /** Measurement of the height, for example the heel height of a shoe */
  WearableMeasurementHeight: NamedNode<
    "http://schema.org/WearableMeasurementHeight"
  >;
  /** Measurement of the hip section, for example of a skirt */
  WearableMeasurementHips: NamedNode<
    "http://schema.org/WearableMeasurementHips"
  >;
  /** Measurement of the inseam, for example of pants */
  WearableMeasurementInseam: NamedNode<
    "http://schema.org/WearableMeasurementInseam"
  >;
  /** Represents the length, for example of a dress */
  WearableMeasurementLength: NamedNode<
    "http://schema.org/WearableMeasurementLength"
  >;
  /** Measurement of the outside leg, for example of pants */
  WearableMeasurementOutsideLeg: NamedNode<
    "http://schema.org/WearableMeasurementOutsideLeg"
  >;
  /** Measurement of the sleeve length, for example of a shirt */
  WearableMeasurementSleeve: NamedNode<
    "http://schema.org/WearableMeasurementSleeve"
  >;
  /** Measurement of the waist section, for example of pants */
  WearableMeasurementWaist: NamedNode<
    "http://schema.org/WearableMeasurementWaist"
  >;
  /** Measurement of the width, for example of shoes */
  WearableMeasurementWidth: NamedNode<
    "http://schema.org/WearableMeasurementWidth"
  >;
  /** Size group "Big" for wearables. */
  WearableSizeGroupBig: NamedNode<"https://schema.org/WearableSizeGroupBig">;
  /** Enumerates common size groups (also known as "size types") for wearable products. */
  WearableSizeGroupEnumeration: NamedNode<
    "http://schema.org/WearableSizeGroupEnumeration"
  >;
  /** Size group "Boys" for wearables. */
  WearableSizeGroupBoys: NamedNode<"https://schema.org/WearableSizeGroupBoys">;
  /** Size group "Extra Short" for wearables. */
  WearableSizeGroupExtraShort: NamedNode<
    "http://schema.org/WearableSizeGroupExtraShort"
  >;
  /** Size group "Extra Tall" for wearables. */
  WearableSizeGroupExtraTall: NamedNode<
    "http://schema.org/WearableSizeGroupExtraTall"
  >;
  /** Size group "Girls" for wearables. */
  WearableSizeGroupGirls: NamedNode<
    "https://schema.org/WearableSizeGroupGirls"
  >;
  /** Size group "Husky" (or "Stocky") for wearables. */
  WearableSizeGroupHusky: NamedNode<
    "https://schema.org/WearableSizeGroupHusky"
  >;
  /** Size group "Infants" for wearables. */
  WearableSizeGroupInfants: NamedNode<
    "http://schema.org/WearableSizeGroupInfants"
  >;
  /** Size group "Juniors" for wearables. */
  WearableSizeGroupJuniors: NamedNode<
    "http://schema.org/WearableSizeGroupJuniors"
  >;
  /** Size group "Maternity" for wearables. */
  WearableSizeGroupMaternity: NamedNode<
    "http://schema.org/WearableSizeGroupMaternity"
  >;
  /** Size group "Mens" for wearables. */
  WearableSizeGroupMens: NamedNode<"https://schema.org/WearableSizeGroupMens">;
  /** Size group "Misses" (also known as "Missy") for wearables. */
  WearableSizeGroupMisses: NamedNode<
    "http://schema.org/WearableSizeGroupMisses"
  >;
  /** Size group "Petite" for wearables. */
  WearableSizeGroupPetite: NamedNode<
    "http://schema.org/WearableSizeGroupPetite"
  >;
  /** Size group "Plus" for wearables. */
  WearableSizeGroupPlus: NamedNode<"https://schema.org/WearableSizeGroupPlus">;
  /** Size group "Regular" for wearables. */
  WearableSizeGroupRegular: NamedNode<
    "http://schema.org/WearableSizeGroupRegular"
  >;
  /** Size group "Short" for wearables. */
  WearableSizeGroupShort: NamedNode<
    "https://schema.org/WearableSizeGroupShort"
  >;
  /** Size group "Tall" for wearables. */
  WearableSizeGroupTall: NamedNode<"https://schema.org/WearableSizeGroupTall">;
  /** Size group "Womens" for wearables. */
  WearableSizeGroupWomens: NamedNode<
    "http://schema.org/WearableSizeGroupWomens"
  >;
  /** Australian size system for wearables. */
  WearableSizeSystemAU: NamedNode<"https://schema.org/WearableSizeSystemAU">;
  /** Enumerates common size systems specific for wearable products */
  WearableSizeSystemEnumeration: NamedNode<
    "http://schema.org/WearableSizeSystemEnumeration"
  >;
  /** Brazilian size system for wearables. */
  WearableSizeSystemBR: NamedNode<"https://schema.org/WearableSizeSystemBR">;
  /** Chinese size system for wearables. */
  WearableSizeSystemCN: NamedNode<"https://schema.org/WearableSizeSystemCN">;
  /** Continental size system for wearables. */
  WearableSizeSystemContinental: NamedNode<
    "http://schema.org/WearableSizeSystemContinental"
  >;
  /** German size system for wearables. */
  WearableSizeSystemDE: NamedNode<"https://schema.org/WearableSizeSystemDE">;
  /** EN 13402 (joint European standard for size labelling of clothes). */
  WearableSizeSystemEN13402: NamedNode<
    "http://schema.org/WearableSizeSystemEN13402"
  >;
  /** European size system for wearables. */
  WearableSizeSystemEurope: NamedNode<
    "http://schema.org/WearableSizeSystemEurope"
  >;
  /** French size system for wearables. */
  WearableSizeSystemFR: NamedNode<"https://schema.org/WearableSizeSystemFR">;
  /** GS1 (formerly NRF) size system for wearables. */
  WearableSizeSystemGS1: NamedNode<"https://schema.org/WearableSizeSystemGS1">;
  /** Italian size system for wearables. */
  WearableSizeSystemIT: NamedNode<"https://schema.org/WearableSizeSystemIT">;
  /** Japanese size system for wearables. */
  WearableSizeSystemJP: NamedNode<"https://schema.org/WearableSizeSystemJP">;
  /** Mexican size system for wearables. */
  WearableSizeSystemMX: NamedNode<"https://schema.org/WearableSizeSystemMX">;
  /** United Kingdom size system for wearables. */
  WearableSizeSystemUK: NamedNode<"https://schema.org/WearableSizeSystemUK">;
  /** United States size system for wearables. */
  WearableSizeSystemUS: NamedNode<"https://schema.org/WearableSizeSystemUS">;
  /** An application programming interface accessible over Web/Internet technologies. */
  WebAPI: NamedNode<"https://schema.org/WebAPI">;
  /** Web applications. */
  WebApplication: NamedNode<"https://schema.org/WebApplication">;
  /** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs. */
  WebSite: NamedNode<"https://schema.org/WebSite">;
  /** The day of the week between Tuesday and Thursday. */
  Wednesday: NamedNode<"https://schema.org/Wednesday">;
  /** The conventional Western system of medicine, that aims to apply the best available evidence gained from the scientific method to clinical decision making. Also known as conventional or Western medicine. */
  WesternConventional: NamedNode<"https://schema.org/WesternConventional">;
  /** The drug's cost represents the wholesale acquisition cost of the drug. */
  Wholesale: NamedNode<"https://schema.org/Wholesale">;
  /** A wholesale store. */
  WholesaleStore: NamedNode<"https://schema.org/WholesaleStore">;
  /** The act of achieving victory in a competitive activity. */
  WinAction: NamedNode<"https://schema.org/WinAction">;
  /** A winery. */
  Winery: NamedNode<"https://schema.org/Winery">;
  /** Withdrawn. */
  Withdrawn: NamedNode<"https://schema.org/Withdrawn">;
  /** A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs. */
  WorkBasedProgram: NamedNode<"https://schema.org/WorkBasedProgram">;
  /** A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying. */
  WorkersUnion: NamedNode<"https://schema.org/WorkersUnion">;
  /** The act of authoring written creative content. */
  WriteAction: NamedNode<"https://schema.org/WriteAction">;
  /** Permission to write or edit the document. */
  WritePermission: NamedNode<"https://schema.org/WritePermission">;
  /** Text representing an XPath (typically but not necessarily version 1.0). */
  XPathType: NamedNode<"https://schema.org/XPathType">;
  /** X-ray imaging. */
  XRay: NamedNode<"https://schema.org/XRay">;
  /** The airline boards by zones of the plane. */
  ZoneBoardingPolicy: NamedNode<"https://schema.org/ZoneBoardingPolicy">;
  /** A zoo. */
  Zoo: NamedNode<"https://schema.org/Zoo">;
  /** The subject matter of the content. */
  about: NamedNode<"https://schema.org/about">;
  /** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
  domainIncludes: NamedNode<"https://schema.org/domainIncludes">;
  /** Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used. */
  inverseOf: NamedNode<"https://schema.org/inverseOf">;
  /** A CreativeWork or Event about this Thing. */
  subjectOf: NamedNode<"https://schema.org/subjectOf">;
  /** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
  rangeIncludes: NamedNode<"https://schema.org/rangeIncludes">;
  /** Indicates whether the book is an abridged edition. */
  abridged: NamedNode<"https://schema.org/abridged">;
  /** An abstract is a short description that summarizes a [[CreativeWork]]. */
  abstract: NamedNode<"https://schema.org/abstract">;
  /** The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds. */
  accelerationTime: NamedNode<"https://schema.org/accelerationTime">;
  /** The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author. */
  acceptedAnswer: NamedNode<"https://schema.org/acceptedAnswer">;
  /** An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site. */
  suggestedAnswer: NamedNode<"https://schema.org/suggestedAnswer">;
  /** The offer(s) -- e.g., product, quantity and price combinations -- included in the order. */
  acceptedOffer: NamedNode<"https://schema.org/acceptedOffer">;
  /** The payment method(s) accepted by seller for this offer. */
  acceptedPaymentMethod: NamedNode<"https://schema.org/acceptedPaymentMethod">;
  /** Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```. */
  acceptsReservations: NamedNode<"https://schema.org/acceptsReservations">;
  /** Password, PIN, or access code needed for delivery (e.g. from a locker). */
  accessCode: NamedNode<"https://schema.org/accessCode">;
  /** The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary). */
  accessMode: NamedNode<"https://schema.org/accessMode">;
  /** A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary). */
  accessModeSufficient: NamedNode<"https://schema.org/accessModeSufficient">;
  /** Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary). */
  accessibilityAPI: NamedNode<"https://schema.org/accessibilityAPI">;
  /** Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary). */
  accessibilityControl: NamedNode<"https://schema.org/accessibilityControl">;
  /** Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary). */
  accessibilityFeature: NamedNode<"https://schema.org/accessibilityFeature">;
  /** A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary). */
  accessibilityHazard: NamedNode<"https://schema.org/accessibilityHazard">;
  /** A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed." */
  accessibilitySummary: NamedNode<"https://schema.org/accessibilitySummary">;
  /** Category of an [[Accommodation]], following real estate conventions, e.g. RESO (see [PropertySubType](https://ddwiki.reso.org/display/DDW17/PropertySubType+Field), and [PropertyType](https://ddwiki.reso.org/display/DDW17/PropertyType+Field) fields  for suggested values). */
  accommodationCategory: NamedNode<"https://schema.org/accommodationCategory">;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category: NamedNode<"https://schema.org/category">;
  /** A floorplan of some [[Accommodation]]. */
  accommodationFloorPlan: NamedNode<
    "https://schema.org/accommodationFloorPlan"
  >;
  /** The identifier for the account the payment will be applied to. */
  accountId: NamedNode<"https://schema.org/accountId">;
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *
   */
  identifier: NamedNode<"https://schema.org/identifier">;
  /** A minimum amount that has to be paid in every month. */
  accountMinimumInflow: NamedNode<"https://schema.org/accountMinimumInflow">;
  /** An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money. */
  accountOverdraftLimit: NamedNode<"https://schema.org/accountOverdraftLimit">;
  /** Specifies the Person that is legally accountable for the CreativeWork. */
  accountablePerson: NamedNode<"https://schema.org/accountablePerson">;
  /** Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item. */
  acquireLicensePage: NamedNode<"https://schema.org/acquireLicensePage">;
  /**
   * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
   *
   * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
   */
  usageInfo: NamedNode<"https://schema.org/usageInfo">;
  /** The organization or person from which the product was acquired. */
  acquiredFrom: NamedNode<"https://schema.org/acquiredFrom">;
  /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
  acrissCode: NamedNode<"https://schema.org/acrissCode">;
  /** A set of requirements that must be fulfilled in order to perform an Action. If more than one value is specified, fulfilling one set of requirements will allow the Action to be performed. */
  actionAccessibilityRequirement: NamedNode<
    "http://schema.org/actionAccessibilityRequirement"
  >;
  /** An application that can complete the request. */
  actionApplication: NamedNode<"https://schema.org/actionApplication">;
  /** A sub property of object. The options subject to this action. */
  actionOption: NamedNode<"https://schema.org/actionOption">;
  /** The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*. */
  object: NamedNode<"https://schema.org/object">;
  /** The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication. */
  actionPlatform: NamedNode<"https://schema.org/actionPlatform">;
  /** Indicates the current disposition of the Action. */
  actionStatus: NamedNode<"https://schema.org/actionStatus">;
  /** For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
  actionableFeedbackPolicy: NamedNode<
    "http://schema.org/actionableFeedbackPolicy"
  >;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   *
   */
  publishingPrinciples: NamedNode<"https://schema.org/publishingPrinciples">;
  /** An active ingredient, typically chemical compounds and/or biologic substances. */
  activeIngredient: NamedNode<"https://schema.org/activeIngredient">;
  /** Length of time to engage in the activity. */
  activityDuration: NamedNode<"https://schema.org/activityDuration">;
  /** How often one should engage in the activity. */
  activityFrequency: NamedNode<"https://schema.org/activityFrequency">;
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: NamedNode<"https://schema.org/actor">;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: NamedNode<"https://schema.org/actors">;
  /** An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge). */
  addOn: NamedNode<"https://schema.org/addOn">;
  /** An additional name for a Person, can be used for a middle name. */
  additionalName: NamedNode<"https://schema.org/additionalName">;
  /** An alias for the item. */
  alternateName: NamedNode<"https://schema.org/alternateName">;
  /** If responding yes, the number of guests who will attend in addition to the invitee. */
  additionalNumberOfGuests: NamedNode<
    "http://schema.org/additionalNumberOfGuests"
  >;
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   *
   */
  additionalProperty: NamedNode<"https://schema.org/additionalProperty">;
  /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. */
  additionalType: NamedNode<"https://schema.org/additionalType">;
  /** Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc. */
  additionalVariable: NamedNode<"https://schema.org/additionalVariable">;
  /** Physical address of the item. */
  address: NamedNode<"https://schema.org/address">;
  /** The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). */
  addressCountry: NamedNode<"https://schema.org/addressCountry">;
  /** The locality in which the street address is, and which is in the region. For example, Mountain View. */
  addressLocality: NamedNode<"https://schema.org/addressLocality">;
  /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country). */
  addressRegion: NamedNode<"https://schema.org/addressRegion">;
  /** A route by which this drug may be administered, e.g. 'oral'. */
  administrationRoute: NamedNode<"https://schema.org/administrationRoute">;
  /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
  advanceBookingRequirement: NamedNode<
    "http://schema.org/advanceBookingRequirement"
  >;
  /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead. */
  adverseOutcome: NamedNode<"https://schema.org/adverseOutcome">;
  /** Drugs that affect the test's results. */
  affectedBy: NamedNode<"https://schema.org/affectedBy">;
  /** An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
  affiliation: NamedNode<"https://schema.org/affiliation">;
  /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
  memberOf: NamedNode<"https://schema.org/memberOf">;
  /** A media object representing the circumstances after performing this direction. */
  afterMedia: NamedNode<"https://schema.org/afterMedia">;
  /** The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book. */
  agent: NamedNode<"https://schema.org/agent">;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: NamedNode<"https://schema.org/aggregateRating">;
  /** The kind of aircraft (e.g., "Boeing 747"). */
  aircraft: NamedNode<"https://schema.org/aircraft">;
  /** A music album. */
  album: NamedNode<"https://schema.org/album">;
  /** Classification of the album by its type of content: soundtrack, live album, studio album, etc. */
  albumProductionType: NamedNode<"https://schema.org/albumProductionType">;
  /** A release of this album. */
  albumRelease: NamedNode<"https://schema.org/albumRelease">;
  /** The album this is a release of. */
  releaseOf: NamedNode<"https://schema.org/releaseOf">;
  /** The kind of release which this album is: single, EP or album. */
  albumReleaseType: NamedNode<"https://schema.org/albumReleaseType">;
  /** A collection of music albums. */
  albums: NamedNode<"https://schema.org/albums">;
  /** Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. */
  alcoholWarning: NamedNode<"https://schema.org/alcoholWarning">;
  /** The algorithm or rules to follow to compute the score. */
  algorithm: NamedNode<"https://schema.org/algorithm">;
  /** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'. */
  alignmentType: NamedNode<"https://schema.org/alignmentType">;
  /** A secondary title of the CreativeWork. */
  alternativeHeadline: NamedNode<"https://schema.org/alternativeHeadline">;
  /** Another gene which is a variation of this one. */
  alternativeOf: NamedNode<"https://schema.org/alternativeOf">;
  /** Alumni of an organization. */
  alumni: NamedNode<"https://schema.org/alumni">;
  /** An organization that the person is an alumni of. */
  alumniOf: NamedNode<"https://schema.org/alumniOf">;
  /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
  amenityFeature: NamedNode<"https://schema.org/amenityFeature">;
  /** The amount of money. */
  amount: NamedNode<"https://schema.org/amount">;
  /** The quantity of the goods included in the offer. */
  amountOfThisGood: NamedNode<"https://schema.org/amountOfThisGood">;
  /** Indicates a specific [[CivicStructure]] or [[LocalBusiness]] associated with the SpecialAnnouncement. For example, a specific testing facility or business with special opening hours. For a larger geographic region like a quarantine of an entire region, use [[spatialCoverage]]. */
  announcementLocation: NamedNode<"https://schema.org/announcementLocation">;
  /**
   * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
   *       contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
   *       areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
   */
  spatialCoverage: NamedNode<"https://schema.org/spatialCoverage">;
  /** The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction. */
  annualPercentageRate: NamedNode<"https://schema.org/annualPercentageRate">;
  /** The number of answers this question has received. */
  answerCount: NamedNode<"https://schema.org/answerCount">;
  /** A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. */
  answerExplanation: NamedNode<"https://schema.org/answerExplanation">;
  /** The muscle whose action counteracts the specified muscle. */
  antagonist: NamedNode<"https://schema.org/antagonist">;
  /** Indicates an occurrence of a [[Claim]] in some [[CreativeWork]]. */
  appearance: NamedNode<"https://schema.org/appearance">;
  /** Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book. */
  workExample: NamedNode<"https://schema.org/workExample">;
  /** A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code. */
  applicableCountry: NamedNode<"https://schema.org/applicableCountry">;
  /** The location in which the status applies. */
  applicableLocation: NamedNode<"https://schema.org/applicableLocation">;
  /** The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements. */
  applicantLocationRequirements: NamedNode<
    "http://schema.org/applicantLocationRequirements"
  >;
  /** An application that can complete the request. */
  application: NamedNode<"https://schema.org/application">;
  /** Type of software application, e.g. 'Game, Multimedia'. */
  applicationCategory: NamedNode<"https://schema.org/applicationCategory">;
  /** Contact details for further information relevant to this job posting. */
  applicationContact: NamedNode<"https://schema.org/applicationContact">;
  /** The date at which the program stops collecting applications for the next enrollment cycle. */
  applicationDeadline: NamedNode<"https://schema.org/applicationDeadline">;
  /** The date at which the program begins collecting applications for the next enrollment cycle. */
  applicationStartDate: NamedNode<"https://schema.org/applicationStartDate">;
  /** Subcategory of the application, e.g. 'Arcade Game'. */
  applicationSubCategory: NamedNode<
    "https://schema.org/applicationSubCategory"
  >;
  /** The name of the application suite to which the application belongs (e.g. Excel belongs to Office). */
  applicationSuite: NamedNode<"https://schema.org/applicationSuite">;
  /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
  appliesToDeliveryMethod: NamedNode<
    "http://schema.org/appliesToDeliveryMethod"
  >;
  /** The payment method(s) to which the payment charge specification applies. */
  appliesToPaymentMethod: NamedNode<
    "https://schema.org/appliesToPaymentMethod"
  >;
  /** Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]]. */
  archiveHeld: NamedNode<"https://schema.org/archiveHeld">;
  /** [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]]. */
  holdingArchive: NamedNode<"https://schema.org/holdingArchive">;
  /** Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content. */
  archivedAt: NamedNode<"https://schema.org/archivedAt">;
  /** The area within which users can expect to reach the broadcast service. */
  area: NamedNode<"https://schema.org/area">;
  /** The geographic area where the service is provided. */
  serviceArea: NamedNode<"https://schema.org/serviceArea">;
  /** The geographic area where a service or offered item is provided. */
  areaServed: NamedNode<"https://schema.org/areaServed">;
  /** The airport where the flight terminates. */
  arrivalAirport: NamedNode<"https://schema.org/arrivalAirport">;
  /** The terminal or port from which the boat arrives. */
  arrivalBoatTerminal: NamedNode<"https://schema.org/arrivalBoatTerminal">;
  /** The stop or station from which the bus arrives. */
  arrivalBusStop: NamedNode<"https://schema.org/arrivalBusStop">;
  /** Identifier of the flight's arrival gate. */
  arrivalGate: NamedNode<"https://schema.org/arrivalGate">;
  /** The platform where the train arrives. */
  arrivalPlatform: NamedNode<"https://schema.org/arrivalPlatform">;
  /** The station where the train trip ends. */
  arrivalStation: NamedNode<"https://schema.org/arrivalStation">;
  /** Identifier of the flight's arrival terminal. */
  arrivalTerminal: NamedNode<"https://schema.org/arrivalTerminal">;
  /** The expected arrival time. */
  arrivalTime: NamedNode<"https://schema.org/arrivalTime">;
  /** The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20"). */
  artEdition: NamedNode<"https://schema.org/artEdition">;
  /** The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.) */
  artMedium: NamedNode<"https://schema.org/artMedium">;
  /** A material that something is made from, e.g. leather, wool, cotton, paper. */
  material: NamedNode<"https://schema.org/material">;
  /** The branches that comprise the arterial structure. */
  arterialBranch: NamedNode<"https://schema.org/arterialBranch">;
  /** e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc. */
  artform: NamedNode<"https://schema.org/artform">;
  /** The actual body of the article. */
  articleBody: NamedNode<"https://schema.org/articleBody">;
  /** Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc. */
  articleSection: NamedNode<"https://schema.org/articleSection">;
  /**
   * The primary artist for a work
   *     	in a medium other than pencils or digital line art--for example, if the
   *     	primary artwork is done in watercolors or digital paints.
   */
  artist: NamedNode<"https://schema.org/artist">;
  /** The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. */
  artworkSurface: NamedNode<"https://schema.org/artworkSurface">;
  /**
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   *
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin: NamedNode<"https://schema.org/asin">;
  /** An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc. */
  aspect: NamedNode<"https://schema.org/aspect">;
  /** Indicates if this web page element is the main subject of the page. */
  mainContentOfPage: NamedNode<"https://schema.org/mainContentOfPage">;
  /** Library file name, e.g., mscorlib.dll, system.web.dll. */
  assembly: NamedNode<"https://schema.org/assembly">;
  /** Library file name, e.g., mscorlib.dll, system.web.dll. */
  executableLibraryName: NamedNode<"https://schema.org/executableLibraryName">;
  /** Associated product/technology version. E.g., .NET Framework 4.5. */
  assemblyVersion: NamedNode<"https://schema.org/assemblyVersion">;
  /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
  assesses: NamedNode<"https://schema.org/assesses">;
  /** The anatomy of the underlying organ system or structures associated with this entity. */
  associatedAnatomy: NamedNode<"https://schema.org/associatedAnatomy">;
  /** A NewsArticle associated with the Media Object. */
  associatedArticle: NamedNode<"https://schema.org/associatedArticle">;
  /** An associated [[ClaimReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]]. */
  associatedClaimReview: NamedNode<"https://schema.org/associatedClaimReview">;
  /** An associated [[Review]]. */
  associatedReview: NamedNode<"https://schema.org/associatedReview">;
  /** Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue. */
  associatedDisease: NamedNode<"https://schema.org/associatedDisease">;
  /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
  associatedMedia: NamedNode<"https://schema.org/associatedMedia">;
  /** An associated [[MediaReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]]. */
  associatedMediaReview: NamedNode<"https://schema.org/associatedMediaReview">;
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
  associatedPathophysiology: NamedNode<
    "http://schema.org/associatedPathophysiology"
  >;
  /** A person that acts as performing member of a sports team; a player as opposed to a coach. */
  athlete: NamedNode<"https://schema.org/athlete">;
  /** A person or organization attending the event. */
  attendee: NamedNode<"https://schema.org/attendee">;
  /** A person attending the event. */
  attendees: NamedNode<"https://schema.org/attendees">;
  /** An intended audience, i.e. a group for whom something was created. */
  audience: NamedNode<"https://schema.org/audience">;
  /** The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.). */
  audienceType: NamedNode<"https://schema.org/audienceType">;
  /** An embedded audio object. */
  audio: NamedNode<"https://schema.org/audio">;
  /** The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media. */
  authenticator: NamedNode<"https://schema.org/authenticator">;
  /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
  author: NamedNode<"https://schema.org/author">;
  /** The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc. */
  availability: NamedNode<"https://schema.org/availability">;
  /** The end of the availability of the product or service included in the offer. */
  availabilityEnds: NamedNode<"https://schema.org/availabilityEnds">;
  /** The beginning of the availability of the product or service included in the offer. */
  availabilityStarts: NamedNode<"https://schema.org/availabilityStarts">;
  /** The place(s) from which the offer can be obtained (e.g. store locations). */
  availableAtOrFrom: NamedNode<"https://schema.org/availableAtOrFrom">;
  /** A means of accessing the service (e.g. a phone bank, a web site, a location, etc.). */
  availableChannel: NamedNode<"https://schema.org/availableChannel">;
  /** The delivery method(s) available for this offer. */
  availableDeliveryMethod: NamedNode<
    "http://schema.org/availableDeliveryMethod"
  >;
  /** When the item is available for pickup from the store, locker, etc. */
  availableFrom: NamedNode<"https://schema.org/availableFrom">;
  /** The location in which the strength is available. */
  availableIn: NamedNode<"https://schema.org/availableIn">;
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: NamedNode<"https://schema.org/availableLanguage">;
  /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
  availableOnDevice: NamedNode<"https://schema.org/availableOnDevice">;
  /** A medical service available from this provider. */
  availableService: NamedNode<"https://schema.org/availableService">;
  /** An available dosage strength for the drug. */
  availableStrength: NamedNode<"https://schema.org/availableStrength">;
  /** A diagnostic test or procedure offered by this lab. */
  availableTest: NamedNode<"https://schema.org/availableTest">;
  /** After this date, the item will no longer be available for pickup. */
  availableThrough: NamedNode<"https://schema.org/availableThrough">;
  /** An award won by or for this item. */
  award: NamedNode<"https://schema.org/award">;
  /** Awards won by or for this item. */
  awards: NamedNode<"https://schema.org/awards">;
  /** The away team in a sports event. */
  awayTeam: NamedNode<"https://schema.org/awayTeam">;
  /** A competitor in a sports event. */
  competitor: NamedNode<"https://schema.org/competitor">;
  /** For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc. */
  backstory: NamedNode<"https://schema.org/backstory">;
  /** The type of a bank account. */
  bankAccountType: NamedNode<"https://schema.org/bankAccountType">;
  /** The base salary of the job or of an employee in an EmployeeRole. */
  baseSalary: NamedNode<"https://schema.org/baseSalary">;
  /** A sub property of recipient. The recipient blind copied on a message. */
  bccRecipient: NamedNode<"https://schema.org/bccRecipient">;
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: NamedNode<"https://schema.org/recipient">;
  /**
   * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
   *       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
   */
  bed: NamedNode<"https://schema.org/bed">;
  /** A media object representing the circumstances before performing this direction. */
  beforeMedia: NamedNode<"https://schema.org/beforeMedia">;
  /** A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary. */
  beneficiaryBank: NamedNode<"https://schema.org/beneficiaryBank">;
  /** Description of benefits associated with the job. */
  benefits: NamedNode<"https://schema.org/benefits">;
  /** Description of benefits associated with the job. */
  jobBenefits: NamedNode<"https://schema.org/jobBenefits">;
  /** The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation. */
  benefitsSummaryUrl: NamedNode<"https://schema.org/benefitsSummaryUrl">;
  /** The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed. */
  bestRating: NamedNode<"https://schema.org/bestRating">;
  /** The billing address for the order. */
  billingAddress: NamedNode<"https://schema.org/billingAddress">;
  /** Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property). */
  billingDuration: NamedNode<"https://schema.org/billingDuration">;
  /** This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property. */
  billingIncrement: NamedNode<"https://schema.org/billingIncrement">;
  /** The time interval used to compute the invoice. */
  billingPeriod: NamedNode<"https://schema.org/billingPeriod">;
  /** Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property. */
  billingStart: NamedNode<"https://schema.org/billingStart">;
  /** A BioChemEntity that is known to interact with this item. */
  bioChemInteraction: NamedNode<"https://schema.org/bioChemInteraction">;
  /** A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms. */
  bioChemSimilarity: NamedNode<"https://schema.org/bioChemSimilarity">;
  /** A role played by the BioChemEntity within a biological context. */
  biologicalRole: NamedNode<"https://schema.org/biologicalRole">;
  /** The biomechanical properties of the bone. */
  biomechnicalClass: NamedNode<"https://schema.org/biomechnicalClass">;
  /** Date of birth. */
  birthDate: NamedNode<"https://schema.org/birthDate">;
  /** The place where the person was born. */
  birthPlace: NamedNode<"https://schema.org/birthPlace">;
  /** The bitrate of the media object. */
  bitrate: NamedNode<"https://schema.org/bitrate">;
  /** A posting that is part of this blog. */
  blogPost: NamedNode<"https://schema.org/blogPost">;
  /** Indicates a post that is part of a [[Blog]]. Note that historically, what we term a "Blog" was once known as a "weblog", and that what we term a "BlogPosting" is now often colloquially referred to as a "blog". */
  blogPosts: NamedNode<"https://schema.org/blogPosts">;
  /** The blood vessel that carries blood from the heart to the muscle. */
  bloodSupply: NamedNode<"https://schema.org/bloodSupply">;
  /** The airline-specific indicator of boarding order / preference. */
  boardingGroup: NamedNode<"https://schema.org/boardingGroup">;
  /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
  boardingPolicy: NamedNode<"https://schema.org/boardingPolicy">;
  /** Location in the body of the anatomical structure. */
  bodyLocation: NamedNode<"https://schema.org/bodyLocation">;
  /** Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.). */
  bodyType: NamedNode<"https://schema.org/bodyType">;
  /** The edition of the book. */
  bookEdition: NamedNode<"https://schema.org/bookEdition">;
  /** The format of the book. */
  bookFormat: NamedNode<"https://schema.org/bookFormat">;
  /** 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent. */
  bookingAgent: NamedNode<"https://schema.org/bookingAgent">;
  /** An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
  broker: NamedNode<"https://schema.org/broker">;
  /** The date and time the reservation was booked. */
  bookingTime: NamedNode<"https://schema.org/bookingTime">;
  /** A sub property of participant. The person that borrows the object being lent. */
  borrower: NamedNode<"https://schema.org/borrower">;
  /** Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*. */
  participant: NamedNode<"https://schema.org/participant">;
  /** A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. */
  box: NamedNode<"https://schema.org/box">;
  /** The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]]. */
  branch: NamedNode<"https://schema.org/branch">;
  /**
   * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
   *
   */
  branchCode: NamedNode<"https://schema.org/branchCode">;
  /** The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical) [[branch]]. */
  branchOf: NamedNode<"https://schema.org/branchOf">;
  /** The larger organization that this organization is a [[subOrganization]] of, if any. */
  parentOrganization: NamedNode<"https://schema.org/parentOrganization">;
  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
  brand: NamedNode<"https://schema.org/brand">;
  /** A set of links that can help a user understand and navigate a website hierarchy. */
  breadcrumb: NamedNode<"https://schema.org/breadcrumb">;
  /** Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. */
  breastfeedingWarning: NamedNode<"https://schema.org/breastfeedingWarning">;
  /** The media network(s) whose content is broadcast on this station. */
  broadcastAffiliateOf: NamedNode<"https://schema.org/broadcastAffiliateOf">;
  /** The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number. */
  broadcastChannelId: NamedNode<"https://schema.org/broadcastChannelId">;
  /** The name displayed in the channel guide. For many US affiliates, it is the network name. */
  broadcastDisplayName: NamedNode<"https://schema.org/broadcastDisplayName">;
  /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM". */
  broadcastFrequency: NamedNode<"https://schema.org/broadcastFrequency">;
  /** The frequency in MHz for a particular broadcast. */
  broadcastFrequencyValue: NamedNode<
    "http://schema.org/broadcastFrequencyValue"
  >;
  /** The event being broadcast such as a sporting event or awards ceremony. */
  broadcastOfEvent: NamedNode<"https://schema.org/broadcastOfEvent">;
  /** The type of service required to have access to the channel (e.g. Standard or Premium). */
  broadcastServiceTier: NamedNode<"https://schema.org/broadcastServiceTier">;
  /** The modulation (e.g. FM, AM, etc) used by a particular broadcast service. */
  broadcastSignalModulation: NamedNode<
    "http://schema.org/broadcastSignalModulation"
  >;
  /** The subchannel used for the broadcast. */
  broadcastSubChannel: NamedNode<"https://schema.org/broadcastSubChannel">;
  /** The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts. */
  broadcastTimezone: NamedNode<"https://schema.org/broadcastTimezone">;
  /** The organization owning or operating the broadcast service. */
  broadcaster: NamedNode<"https://schema.org/broadcaster">;
  /** Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'. */
  browserRequirements: NamedNode<"https://schema.org/browserRequirements">;
  /** The name of the bus (e.g. Bolt Express). */
  busName: NamedNode<"https://schema.org/busName">;
  /** The unique identifier for the bus. */
  busNumber: NamedNode<"https://schema.org/busNumber">;
  /** Days of the week when the merchant typically operates, indicated via opening hours markup. */
  businessDays: NamedNode<"https://schema.org/businessDays">;
  /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
  businessFunction: NamedNode<"https://schema.org/businessFunction">;
  /** A sub property of participant. The participant/person/organization that bought the object. */
  buyer: NamedNode<"https://schema.org/buyer">;
  /** The artist that performed this album or recording. */
  byArtist: NamedNode<"https://schema.org/byArtist">;
  /** Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules. */
  byDay: NamedNode<"https://schema.org/byDay">;
  /** Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1. */
  byMonth: NamedNode<"https://schema.org/byMonth">;
  /** Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31. */
  byMonthDay: NamedNode<"https://schema.org/byMonthDay">;
  /** Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month. */
  byMonthWeek: NamedNode<"https://schema.org/byMonthWeek">;
  /** A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
  callSign: NamedNode<"https://schema.org/callSign">;
  /** The number of calories. */
  calories: NamedNode<"https://schema.org/calories">;
  /** A sub property of object. The candidate subject of this action. */
  candidate: NamedNode<"https://schema.org/candidate">;
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]]. */
  caption: NamedNode<"https://schema.org/caption">;
  /** The number of grams of carbohydrates. */
  carbohydrateContent: NamedNode<"https://schema.org/carbohydrateContent">;
  /** The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
  cargoVolume: NamedNode<"https://schema.org/cargoVolume">;
  /** 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights. */
  carrier: NamedNode<"https://schema.org/carrier">;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: NamedNode<"https://schema.org/provider">;
  /** Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network). */
  carrierRequirements: NamedNode<"https://schema.org/carrierRequirements">;
  /** A cardholder benefit that pays the cardholder a small percentage of their net expenditures. */
  cashBack: NamedNode<"https://schema.org/cashBack">;
  /** A data catalog which contains this dataset. */
  catalog: NamedNode<"https://schema.org/catalog">;
  /** A data catalog which contains this dataset. */
  includedInDataCatalog: NamedNode<"https://schema.org/includedInDataCatalog">;
  /** The catalog number for the release. */
  catalogNumber: NamedNode<"https://schema.org/catalogNumber">;
  /** The condition, complication, symptom, sign, etc. caused. */
  causeOf: NamedNode<"https://schema.org/causeOf">;
  /** A sub property of recipient. The recipient copied on a message. */
  ccRecipient: NamedNode<"https://schema.org/ccRecipient">;
  /** Fictional person connected with a creative work. */
  character: NamedNode<"https://schema.org/character">;
  /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
  characterAttribute: NamedNode<"https://schema.org/characterAttribute">;
  /** The name of a character played in some acting or performing role, i.e. in a PerformanceRole. */
  characterName: NamedNode<"https://schema.org/characterName">;
  /** Cheat codes to the game. */
  cheatCode: NamedNode<"https://schema.org/cheatCode">;
  /** The earliest someone may check into a lodging establishment. */
  checkinTime: NamedNode<"https://schema.org/checkinTime">;
  /** A URL template (RFC 6570) for a checkout page for an offer. This approach allows merchants to specify a URL for online checkout of the offered product, by interpolating parameters such as the logged in user ID, product ID, quantity, discount code etc. Parameter naming and standardization are not specified here. */
  checkoutPageURLTemplate: NamedNode<
    "http://schema.org/checkoutPageURLTemplate"
  >;
  /** The latest someone may check out of a lodging establishment. */
  checkoutTime: NamedNode<"https://schema.org/checkoutTime">;
  /** The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance. */
  chemicalComposition: NamedNode<"https://schema.org/chemicalComposition">;
  /** A role played by the BioChemEntity within a chemical context. */
  chemicalRole: NamedNode<"https://schema.org/chemicalRole">;
  /** Maximal age of the child. */
  childMaxAge: NamedNode<"https://schema.org/childMaxAge">;
  /** Minimal age of the child. */
  childMinAge: NamedNode<"https://schema.org/childMinAge">;
  /** Closest child taxa of the taxon in question. */
  childTaxon: NamedNode<"https://schema.org/childTaxon">;
  /** Closest parent taxon of the taxon in question. */
  parentTaxon: NamedNode<"https://schema.org/parentTaxon">;
  /** A child of the person. */
  children: NamedNode<"https://schema.org/children">;
  /** The number of milligrams of cholesterol. */
  cholesterolContent: NamedNode<"https://schema.org/cholesterolContent">;
  /** A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters. */
  circle: NamedNode<"https://schema.org/circle">;
  /** A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. */
  citation: NamedNode<"https://schema.org/citation">;
  /**
   * For a [[Claim]] interpreted from [[MediaObject]] content
   *     sed to indicate a claim contained, implied or refined from the content of a [[MediaObject]].
   */
  claimInterpreter: NamedNode<"https://schema.org/claimInterpreter">;
  /** A short summary of the specific claims reviewed in a ClaimReview. */
  claimReviewed: NamedNode<"https://schema.org/claimReviewed">;
  /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
  clincalPharmacology: NamedNode<"https://schema.org/clincalPharmacology">;
  /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
  clinicalPharmacology: NamedNode<"https://schema.org/clinicalPharmacology">;
  /** Position of the clip within an ordered group of clips. */
  clipNumber: NamedNode<"https://schema.org/clipNumber">;
  /** The position of an item in a series or sequence of items. */
  position: NamedNode<"https://schema.org/position">;
  /** The closing hour of the place or service on the given day(s) of the week. */
  closes: NamedNode<"https://schema.org/closes">;
  /** A person that acts in a coaching role for a sports team. */
  coach: NamedNode<"https://schema.org/coach">;
  /** A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. */
  code: NamedNode<"https://schema.org/code">;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex). */
  codeRepository: NamedNode<"https://schema.org/codeRepository">;
  /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
  codeSampleType: NamedNode<"https://schema.org/codeSampleType">;
  /** A short textual code that uniquely identifies the value. */
  codeValue: NamedNode<"https://schema.org/codeValue">;
  /** A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]] */
  termCode: NamedNode<"https://schema.org/termCode">;
  /** The coding system, e.g. 'ICD-10'. */
  codingSystem: NamedNode<"https://schema.org/codingSystem">;
  /** A colleague of the person. */
  colleague: NamedNode<"https://schema.org/colleague">;
  /** A colleague of the person. */
  colleagues: NamedNode<"https://schema.org/colleagues">;
  /** A sub property of object. The collection target of the action. */
  collection: NamedNode<"https://schema.org/collection">;
  /** A sub property of object. The collection target of the action. */
  targetCollection: NamedNode<"https://schema.org/targetCollection">;
  /** The number of items in the [[Collection]]. */
  collectionSize: NamedNode<"https://schema.org/collectionSize">;
  /** The color of the product. */
  color: NamedNode<"https://schema.org/color">;
  /** The individual who adds color to inked drawings. */
  colorist: NamedNode<"https://schema.org/colorist">;
  /** Comments, typically from users. */
  comment: NamedNode<"https://schema.org/comment">;
  /** The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. */
  commentCount: NamedNode<"https://schema.org/commentCount">;
  /** The text of the UserComment. */
  commentText: NamedNode<"https://schema.org/commentText">;
  /** The time at which the UserComment was made. */
  commentTime: NamedNode<"https://schema.org/commentTime">;
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired: NamedNode<"https://schema.org/competencyRequired">;
  /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
  composer: NamedNode<"https://schema.org/composer">;
  /** Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system. */
  comprisedOf: NamedNode<"https://schema.org/comprisedOf">;
  /** Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ". */
  conditionsOfAccess: NamedNode<"https://schema.org/conditionsOfAccess">;
  /** A number that confirms the given order or payment has been received. */
  confirmationNumber: NamedNode<"https://schema.org/confirmationNumber">;
  /** Other anatomical structures to which this structure is connected. */
  connectedTo: NamedNode<"https://schema.org/connectedTo">;
  /**
   * Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities
   *   corresponding to an indicated type (via [[populationType]]).
   */
  constrainingProperty: NamedNode<"https://schema.org/constrainingProperty">;
  /** An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). */
  contactOption: NamedNode<"https://schema.org/contactOption">;
  /** A contact point for a person or organization. */
  contactPoint: NamedNode<"https://schema.org/contactPoint">;
  /** A contact point for a person or organization. */
  contactPoints: NamedNode<"https://schema.org/contactPoints">;
  /** A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. */
  contactType: NamedNode<"https://schema.org/contactType">;
  /** A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology. */
  contactlessPayment: NamedNode<"https://schema.org/contactlessPayment">;
  /** The basic containment relation between a place and one that contains it. */
  containedIn: NamedNode<"https://schema.org/containedIn">;
  /** The basic containment relation between a place and one that contains it. */
  containedInPlace: NamedNode<"https://schema.org/containedInPlace">;
  /** The basic containment relation between a place and another that it contains. */
  containsPlace: NamedNode<"https://schema.org/containsPlace">;
  /** A season that is part of the media series. */
  containsSeason: NamedNode<"https://schema.org/containsSeason">;
  /** Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense). */
  hasPart: NamedNode<"https://schema.org/hasPart">;
  /** The location depicted or described in the content. For example, the location in a photograph or painting. */
  contentLocation: NamedNode<"https://schema.org/contentLocation">;
  /** Official rating of a piece of content&#x2014;for example, 'MPAA PG-13'. */
  contentRating: NamedNode<"https://schema.org/contentRating">;
  /** The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event. */
  contentReferenceTime: NamedNode<"https://schema.org/contentReferenceTime">;
  /** File size in (mega/kilo)bytes. */
  contentSize: NamedNode<"https://schema.org/contentSize">;
  /** The supported content type(s) for an EntryPoint response. */
  contentType: NamedNode<"https://schema.org/contentType">;
  /** Actual bytes of the media object, for example the image file or video file. */
  contentUrl: NamedNode<"https://schema.org/contentUrl">;
  /** A contraindication for this therapy. */
  contraindication: NamedNode<"https://schema.org/contraindication">;
  /** A secondary contributor to the CreativeWork or Event. */
  contributor: NamedNode<"https://schema.org/contributor">;
  /** The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  cookTime: NamedNode<"https://schema.org/cookTime">;
  /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  performTime: NamedNode<"https://schema.org/performTime">;
  /** The method of cooking, such as Frying, Steaming, ... */
  cookingMethod: NamedNode<"https://schema.org/cookingMethod">;
  /** The party holding the legal copyright to the CreativeWork. */
  copyrightHolder: NamedNode<"https://schema.org/copyrightHolder">;
  /** Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work. */
  copyrightNotice: NamedNode<"https://schema.org/copyrightNotice">;
  /** The year during which the claimed copyright for the CreativeWork was first asserted. */
  copyrightYear: NamedNode<"https://schema.org/copyrightYear">;
  /** Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document. */
  correction: NamedNode<"https://schema.org/correction">;
  /** For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
  correctionsPolicy: NamedNode<"https://schema.org/correctionsPolicy">;
  /** The category of cost, such as wholesale, retail, reimbursement cap, etc. */
  costCategory: NamedNode<"https://schema.org/costCategory">;
  /** The currency (in 3-letter) of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. */
  costCurrency: NamedNode<"https://schema.org/costCurrency">;
  /** Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. */
  costOrigin: NamedNode<"https://schema.org/costOrigin">;
  /** The cost per unit of the drug. */
  costPerUnit: NamedNode<"https://schema.org/costPerUnit">;
  /** Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
  countriesNotSupported: NamedNode<"https://schema.org/countriesNotSupported">;
  /** Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
  countriesSupported: NamedNode<"https://schema.org/countriesSupported">;
  /** The place where the product was assembled. */
  countryOfAssembly: NamedNode<"https://schema.org/countryOfAssembly">;
  /** The place where the item (typically [[Product]]) was last processed and tested before importation. */
  countryOfLastProcessing: NamedNode<
    "http://schema.org/countryOfLastProcessing"
  >;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin: NamedNode<"https://schema.org/countryOfOrigin">;
  /** A sub property of location. The course where this action was taken. */
  course: NamedNode<"https://schema.org/course">;
  /** A sub property of location. The course where this action was taken. */
  exerciseCourse: NamedNode<"https://schema.org/exerciseCourse">;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: NamedNode<"https://schema.org/location">;
  /** The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001). */
  courseCode: NamedNode<"https://schema.org/courseCode">;
  /** The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous). */
  courseMode: NamedNode<"https://schema.org/courseMode">;
  /** Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]]. */
  coursePrerequisites: NamedNode<"https://schema.org/coursePrerequisites">;
  /** The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week". */
  courseWorkload: NamedNode<"https://schema.org/courseWorkload">;
  /** The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes. */
  coverageEndTime: NamedNode<"https://schema.org/coverageEndTime">;
  /** The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins. */
  coverageStartTime: NamedNode<"https://schema.org/coverageStartTime">;
  /** The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle. */
  creativeWorkStatus: NamedNode<"https://schema.org/creativeWorkStatus">;
  /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
  creator: NamedNode<"https://schema.org/creator">;
  /** The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term. */
  credentialCategory: NamedNode<"https://schema.org/credentialCategory">;
  /** Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work. */
  creditText: NamedNode<"https://schema.org/creditText">;
  /** The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. */
  creditedTo: NamedNode<"https://schema.org/creditedTo">;
  /** A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
  cssSelector: NamedNode<"https://schema.org/cssSelector">;
  /** The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currenciesAccepted: NamedNode<"https://schema.org/currenciesAccepted">;
  /** The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currency: NamedNode<"https://schema.org/currency">;
  /** The current price of a currency. */
  currentExchangeRate: NamedNode<"https://schema.org/currentExchangeRate">;
  /** Party placing the order or paying the invoice. */
  customer: NamedNode<"https://schema.org/customer">;
  /** The type of return fees if the product is returned due to customer remorse. */
  customerRemorseReturnFees: NamedNode<
    "http://schema.org/customerRemorseReturnFees"
  >;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse. */
  customerRemorseReturnLabelSource: NamedNode<
    "http://schema.org/customerRemorseReturnLabelSource"
  >;
  /** The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]]. */
  customerRemorseReturnShippingFeesAmount: NamedNode<
    "http://schema.org/customerRemorseReturnShippingFeesAmount"
  >;
  /** Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC). */
  cutoffTime: NamedNode<"https://schema.org/cutoffTime">;
  /** collectiondate - Date for which patient counts are reported. */
  cvdCollectionDate: NamedNode<"https://schema.org/cvdCollectionDate">;
  /** Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry. */
  cvdFacilityCounty: NamedNode<"https://schema.org/cvdFacilityCounty">;
  /** Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry. */
  cvdFacilityId: NamedNode<"https://schema.org/cvdFacilityId">;
  /** numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients. */
  cvdNumBeds: NamedNode<"https://schema.org/cvdNumBeds">;
  /** numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied. */
  cvdNumBedsOcc: NamedNode<"https://schema.org/cvdNumBedsOcc">;
  /** numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location. */
  cvdNumC19Died: NamedNode<"https://schema.org/cvdNumC19Died">;
  /** numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization. */
  cvdNumC19HOPats: NamedNode<"https://schema.org/cvdNumC19HOPats">;
  /** numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19. */
  cvdNumC19HospPats: NamedNode<"https://schema.org/cvdNumC19HospPats">;
  /** numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator. */
  cvdNumC19MechVentPats: NamedNode<"https://schema.org/cvdNumC19MechVentPats">;
  /** numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator. */
  cvdNumC19OFMechVentPats: NamedNode<
    "http://schema.org/cvdNumC19OFMechVentPats"
  >;
  /** numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed. */
  cvdNumC19OverflowPats: NamedNode<"https://schema.org/cvdNumC19OverflowPats">;
  /** numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds. */
  cvdNumICUBeds: NamedNode<"https://schema.org/cvdNumICUBeds">;
  /** numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied. */
  cvdNumICUBedsOcc: NamedNode<"https://schema.org/cvdNumICUBedsOcc">;
  /** numtotbeds - ALL HOSPITAL BEDS: Total number of all inpatient and outpatient beds, including all staffed, ICU, licensed, and overflow (surge) beds used for inpatients or outpatients. */
  cvdNumTotBeds: NamedNode<"https://schema.org/cvdNumTotBeds">;
  /** numvent - MECHANICAL VENTILATORS: Total number of ventilators available. */
  cvdNumVent: NamedNode<"https://schema.org/cvdNumVent">;
  /** numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use. */
  cvdNumVentUse: NamedNode<"https://schema.org/cvdNumVentUse">;
  /** An item within a data feed. Data feeds may have many elements. */
  dataFeedElement: NamedNode<"https://schema.org/dataFeedElement">;
  /** A dataset contained in this catalog. */
  dataset: NamedNode<"https://schema.org/dataset">;
  /** The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format). */
  datasetTimeInterval: NamedNode<"https://schema.org/datasetTimeInterval">;
  /**
   * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
   *       the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content, e.g. ScholarlyArticle, Book, TVSeries or TVEpisode, may indicate their temporalCoverage in broader terms - textually or via well-known URL.
   *       Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
   *
   * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
   */
  temporalCoverage: NamedNode<"https://schema.org/temporalCoverage">;
  /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
  dateCreated: NamedNode<"https://schema.org/dateCreated">;
  /** The datetime the item was removed from the DataFeed. */
  dateDeleted: NamedNode<"https://schema.org/dateDeleted">;
  /** The date the ticket was issued. */
  dateIssued: NamedNode<"https://schema.org/dateIssued">;
  /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
  dateModified: NamedNode<"https://schema.org/dateModified">;
  /** Publication date of an online listing. */
  datePosted: NamedNode<"https://schema.org/datePosted">;
  /** Date of first broadcast/publication. */
  datePublished: NamedNode<"https://schema.org/datePublished">;
  /** The date/time at which the message has been read by the recipient if a single recipient exists. */
  dateRead: NamedNode<"https://schema.org/dateRead">;
  /** The date/time the message was received if a single recipient exists. */
  dateReceived: NamedNode<"https://schema.org/dateReceived">;
  /** The date/time at which the message was sent. */
  dateSent: NamedNode<"https://schema.org/dateSent">;
  /** The date of the first registration of the vehicle with the respective public authorities. */
  dateVehicleFirstRegistered: NamedNode<
    "http://schema.org/dateVehicleFirstRegistered"
  >;
  /**
   * A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.
   *
   * Structured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created, e.g. where a news report was written).  For location depicted or described in the content, use [[contentLocation]].
   *
   * Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
   *
   */
  dateline: NamedNode<"https://schema.org/dateline">;
  /** The day of the week for which these opening hours are valid. */
  dayOfWeek: NamedNode<"https://schema.org/dayOfWeek">;
  /** Date of death. */
  deathDate: NamedNode<"https://schema.org/deathDate">;
  /** The place where the person died. */
  deathPlace: NamedNode<"https://schema.org/deathPlace">;
  /** The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. */
  defaultValue: NamedNode<"https://schema.org/defaultValue">;
  /** Destination address. */
  deliveryAddress: NamedNode<"https://schema.org/deliveryAddress">;
  /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
  deliveryLeadTime: NamedNode<"https://schema.org/deliveryLeadTime">;
  /** A sub property of instrument. The method of delivery. */
  deliveryMethod: NamedNode<"https://schema.org/deliveryMethod">;
  /** The object that helped the agent perform the action. E.g. John wrote a book with *a pen*. */
  instrument: NamedNode<"https://schema.org/instrument">;
  /** New entry added as the package passes through each leg of its journey (from shipment to final delivery). */
  deliveryStatus: NamedNode<"https://schema.org/deliveryStatus">;
  /** The total delay between the receipt of the order and the goods reaching the final customer. */
  deliveryTime: NamedNode<"https://schema.org/deliveryTime">;
  /** A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. */
  department: NamedNode<"https://schema.org/department">;
  /** The airport where the flight originates. */
  departureAirport: NamedNode<"https://schema.org/departureAirport">;
  /** The terminal or port from which the boat departs. */
  departureBoatTerminal: NamedNode<"https://schema.org/departureBoatTerminal">;
  /** The stop or station from which the bus departs. */
  departureBusStop: NamedNode<"https://schema.org/departureBusStop">;
  /** Identifier of the flight's departure gate. */
  departureGate: NamedNode<"https://schema.org/departureGate">;
  /** The platform from which the train departs. */
  departurePlatform: NamedNode<"https://schema.org/departurePlatform">;
  /** The station from which the train departs. */
  departureStation: NamedNode<"https://schema.org/departureStation">;
  /** Identifier of the flight's departure terminal. */
  departureTerminal: NamedNode<"https://schema.org/departureTerminal">;
  /** The expected departure time. */
  departureTime: NamedNode<"https://schema.org/departureTime">;
  /** Prerequisites needed to fulfill steps in article. */
  dependencies: NamedNode<"https://schema.org/dependencies">;
  /** The depth of the item. */
  depth: NamedNode<"https://schema.org/depth">;
  /** A description of the item. */
  description: NamedNode<"https://schema.org/description">;
  /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
  device: NamedNode<"https://schema.org/device">;
  /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
  diagnosis: NamedNode<"https://schema.org/diagnosis">;
  /** An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. */
  diagram: NamedNode<"https://schema.org/diagram">;
  /** A sub property of instrument. The diet used in this action. */
  diet: NamedNode<"https://schema.org/diet">;
  /** Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines. */
  dietFeatures: NamedNode<"https://schema.org/dietFeatures">;
  /** One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient. */
  differentialDiagnosis: NamedNode<"https://schema.org/differentialDiagnosis">;
  /** Indicates whether an [[url]] that is associated with a [[JobPosting]] enables direct application for the job, via the posting website. A job posting is considered to have directApply of [[True]] if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of [[False]] is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied. */
  directApply: NamedNode<"https://schema.org/directApply">;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: NamedNode<"https://schema.org/director">;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: NamedNode<"https://schema.org/directors">;
  /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
  disambiguatingDescription: NamedNode<
    "http://schema.org/disambiguatingDescription"
  >;
  /** Any discount applied (to an Order). */
  discount: NamedNode<"https://schema.org/discount">;
  /** Code used to redeem a discount. */
  discountCode: NamedNode<"https://schema.org/discountCode">;
  /** The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  discountCurrency: NamedNode<"https://schema.org/discountCurrency">;
  /** Specifies the CreativeWork associated with the UserComment. */
  discusses: NamedNode<"https://schema.org/discusses">;
  /** A link to the page containing the comments of the CreativeWork. */
  discussionUrl: NamedNode<"https://schema.org/discussionUrl">;
  /** Information about disease prevention. */
  diseasePreventionInfo: NamedNode<"https://schema.org/diseasePreventionInfo">;
  /**
   * Statistical information about the spread of a disease, either as [[WebContent]], or
   *   described directly as a [[Dataset]], or the specific [[Observation]]s in the dataset. When a [[WebContent]] URL is
   *   provided, the page indicated might also contain more such markup.
   */
  diseaseSpreadStatistics: NamedNode<
    "http://schema.org/diseaseSpreadStatistics"
  >;
  /** The date that this organization was dissolved. */
  dissolutionDate: NamedNode<"https://schema.org/dissolutionDate">;
  /** The distance travelled, e.g. exercising or travelling. */
  distance: NamedNode<"https://schema.org/distance">;
  /** One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis. */
  distinguishingSign: NamedNode<"https://schema.org/distinguishingSign">;
  /** A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also [DCAT](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution) on this point). Different distributions might include or exclude different subsets of the entire dataset, for example. */
  distribution: NamedNode<"https://schema.org/distribution">;
  /** Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
  diversityPolicy: NamedNode<"https://schema.org/diversityPolicy">;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
  diversityStaffingReport: NamedNode<
    "http://schema.org/diversityStaffingReport"
  >;
  /** Further documentation describing the Web API in more detail. */
  documentation: NamedNode<"https://schema.org/documentation">;
  /** Indicates when shipping to a particular [[shippingDestination]] is not available. */
  doesNotShip: NamedNode<"https://schema.org/doesNotShip">;
  /** Whether borrower is a resident of the jurisdiction where the property is located. */
  domiciledMortgage: NamedNode<"https://schema.org/domiciledMortgage">;
  /** The time admission will commence. */
  doorTime: NamedNode<"https://schema.org/doorTime">;
  /** A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. */
  dosageForm: NamedNode<"https://schema.org/dosageForm">;
  /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
  doseSchedule: NamedNode<"https://schema.org/doseSchedule">;
  /** The unit of the dose, e.g. 'mg'. */
  doseUnit: NamedNode<"https://schema.org/doseUnit">;
  /** The value of the dose, e.g. 500. */
  doseValue: NamedNode<"https://schema.org/doseValue">;
  /** a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price. */
  downPayment: NamedNode<"https://schema.org/downPayment">;
  /** If the file can be downloaded, URL to download the binary. */
  downloadUrl: NamedNode<"https://schema.org/downloadUrl">;
  /** The number of downvotes this question, answer or comment has received from the community. */
  downvoteCount: NamedNode<"https://schema.org/downvoteCount">;
  /** The vasculature that the vein drains into. */
  drainsTo: NamedNode<"https://schema.org/drainsTo">;
  /** The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain. */
  driveWheelConfiguration: NamedNode<
    "http://schema.org/driveWheelConfiguration"
  >;
  /** Where a rental car can be dropped off. */
  dropoffLocation: NamedNode<"https://schema.org/dropoffLocation">;
  /** When a rental car can be dropped off. */
  dropoffTime: NamedNode<"https://schema.org/dropoffTime">;
  /** Specifying a drug or medicine used in a medication procedure. */
  drug: NamedNode<"https://schema.org/drug">;
  /** The class of drug this belongs to (e.g., statins). */
  drugClass: NamedNode<"https://schema.org/drugClass">;
  /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
  drugUnit: NamedNode<"https://schema.org/drugUnit">;
  /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
  duns: NamedNode<"https://schema.org/duns">;
  /** A therapy that duplicates or overlaps this one. */
  duplicateTherapy: NamedNode<"https://schema.org/duplicateTherapy">;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: NamedNode<"https://schema.org/duration">;
  /** The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days. */
  durationOfWarranty: NamedNode<"https://schema.org/durationOfWarranty">;
  /** A media object representing the circumstances while performing this direction. */
  duringMedia: NamedNode<"https://schema.org/duringMedia">;
  /** The amount to be paid as a penalty in the event of early payment of the loan. */
  earlyPrepaymentPenalty: NamedNode<
    "https://schema.org/earlyPrepaymentPenalty"
  >;
  /**
   * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J" has several edits, e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
   *
   * Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
   *
   */
  editEIDR: NamedNode<"https://schema.org/editEIDR">;
  /** Specifies the Person who edited the CreativeWork. */
  editor: NamedNode<"https://schema.org/editor">;
  /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
  eduQuestionType: NamedNode<"https://schema.org/eduQuestionType">;
  /** Educational background needed for the position or Occupation. */
  educationRequirements: NamedNode<"https://schema.org/educationRequirements">;
  /**
   * An alignment to an established educational framework.
   *
   * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
   */
  educationalAlignment: NamedNode<"https://schema.org/educationalAlignment">;
  /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
  educationalCredentialAwarded: NamedNode<
    "http://schema.org/educationalCredentialAwarded"
  >;
  /** The framework to which the resource being described is aligned. */
  educationalFramework: NamedNode<"https://schema.org/educationalFramework">;
  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
  educationalLevel: NamedNode<"https://schema.org/educationalLevel">;
  /** Similar to courseMode, the medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ). */
  educationalProgramMode: NamedNode<
    "https://schema.org/educationalProgramMode"
  >;
  /** An educationalRole of an EducationalAudience. */
  educationalRole: NamedNode<"https://schema.org/educationalRole">;
  /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
  educationalUse: NamedNode<"https://schema.org/educationalUse">;
  /** The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
  elevation: NamedNode<"https://schema.org/elevation">;
  /** The legal requirements such as citizenship, visa and other documentation required for an applicant to this job. */
  eligibilityToWorkRequirement: NamedNode<
    "http://schema.org/eligibilityToWorkRequirement"
  >;
  /** The type(s) of customers for which the given offer is valid. */
  eligibleCustomerType: NamedNode<"https://schema.org/eligibleCustomerType">;
  /** The duration for which the given offer is valid. */
  eligibleDuration: NamedNode<"https://schema.org/eligibleDuration">;
  /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
  eligibleQuantity: NamedNode<"https://schema.org/eligibleQuantity">;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   *
   */
  eligibleRegion: NamedNode<"https://schema.org/eligibleRegion">;
  /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
  eligibleTransactionVolume: NamedNode<
    "http://schema.org/eligibleTransactionVolume"
  >;
  /** Email address. */
  email: NamedNode<"https://schema.org/email">;
  /** A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag. */
  embedUrl: NamedNode<"https://schema.org/embedUrl">;
  /** Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'. */
  embeddedTextCaption: NamedNode<"https://schema.org/embeddedTextCaption">;
  /** The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km". */
  emissionsCO2: NamedNode<"https://schema.org/emissionsCO2">;
  /** Someone working for this organization. */
  employee: NamedNode<"https://schema.org/employee">;
  /** People working for this organization. */
  employees: NamedNode<"https://schema.org/employees">;
  /** A description of the employer, career opportunities and work environment for this position. */
  employerOverview: NamedNode<"https://schema.org/employerOverview">;
  /** Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship). */
  employmentType: NamedNode<"https://schema.org/employmentType">;
  /** Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed. */
  employmentUnit: NamedNode<"https://schema.org/employmentUnit">;
  /** Another BioChemEntity encoded by this one. */
  encodesBioChemEntity: NamedNode<"https://schema.org/encodesBioChemEntity">;
  /** Another BioChemEntity encoding by this one. */
  isEncodedByBioChemEntity: NamedNode<
    "http://schema.org/isEncodedByBioChemEntity"
  >;
  /** The CreativeWork encoded by this media object. */
  encodesCreativeWork: NamedNode<"https://schema.org/encodesCreativeWork">;
  /** A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. */
  encoding: NamedNode<"https://schema.org/encoding">;
  /**
   * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
   *
   * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
   *
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   */
  encodingFormat: NamedNode<"https://schema.org/encodingFormat">;
  /** The supported encoding type(s) for an EntryPoint request. */
  encodingType: NamedNode<"https://schema.org/encodingType">;
  /** A media object that encodes this CreativeWork. */
  encodings: NamedNode<"https://schema.org/encodings">;
  /** The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  endDate: NamedNode<"https://schema.org/endDate">;
  /** The end time of the clip expressed as the number of seconds from the beginning of the work. */
  endOffset: NamedNode<"https://schema.org/endOffset">;
  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  endTime: NamedNode<"https://schema.org/endTime">;
  /** A sub property of participant. The person/organization being supported. */
  endorsee: NamedNode<"https://schema.org/endorsee">;
  /** People or organizations that endorse the plan. */
  endorsers: NamedNode<"https://schema.org/endorsers">;
  /** Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
  energyEfficiencyScaleMax: NamedNode<
    "http://schema.org/energyEfficiencyScaleMax"
  >;
  /** Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
  energyEfficiencyScaleMin: NamedNode<
    "http://schema.org/energyEfficiencyScaleMin"
  >;
  /** The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
  engineDisplacement: NamedNode<"https://schema.org/engineDisplacement">;
  /**
   * The power of the vehicle's engine.
   *     Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see  [http://en.wikipedia.org/wiki/Horsepower#Engine\_power\_test\_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  enginePower: NamedNode<"https://schema.org/enginePower">;
  /** The type of engine or engines powering the vehicle. */
  engineType: NamedNode<"https://schema.org/engineType">;
  /** A sub property of location. The entertainment business where the action occurred. */
  entertainmentBusiness: NamedNode<"https://schema.org/entertainmentBusiness">;
  /** The characteristics of associated patients, such as age, gender, race etc. */
  epidemiology: NamedNode<"https://schema.org/epidemiology">;
  /** An episode of a TV, radio or game media within a series or season. */
  episode: NamedNode<"https://schema.org/episode">;
  /** Position of the episode within an ordered group of episodes. */
  episodeNumber: NamedNode<"https://schema.org/episodeNumber">;
  /** An episode of a TV/radio series or season. */
  episodes: NamedNode<"https://schema.org/episodes">;
  /** This ordering relation for qualitative values indicates that the subject is equal to the object. */
  equal: NamedNode<"https://schema.org/equal">;
  /** For failed actions, more information on the cause of the failure. */
  error: NamedNode<"https://schema.org/error">;
  /** The estimated cost of the supply or supplies consumed when performing instructions. */
  estimatedCost: NamedNode<"https://schema.org/estimatedCost">;
  /** The estimated time the flight will take. */
  estimatedFlightDuration: NamedNode<
    "http://schema.org/estimatedFlightDuration"
  >;
  /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
  estimatedSalary: NamedNode<"https://schema.org/estimatedSalary">;
  /** The condition, complication, or symptom whose risk is being estimated. */
  estimatesRiskOf: NamedNode<"https://schema.org/estimatesRiskOf">;
  /** Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
  ethicsPolicy: NamedNode<"https://schema.org/ethicsPolicy">;
  /** Upcoming or past event associated with this place, organization, or action. */
  event: NamedNode<"https://schema.org/event">;
  /** The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix. */
  eventAttendanceMode: NamedNode<"https://schema.org/eventAttendanceMode">;
  /**
   * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
   *       repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
   *       gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
   *       is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
   *       [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
   *       or seasons.
   */
  eventSchedule: NamedNode<"https://schema.org/eventSchedule">;
  /** An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. */
  eventStatus: NamedNode<"https://schema.org/eventStatus">;
  /** Upcoming or past events associated with this place or organization. */
  events: NamedNode<"https://schema.org/events">;
  /** Strength of evidence of the data used to formulate the guideline (enumerated). */
  evidenceLevel: NamedNode<"https://schema.org/evidenceLevel">;
  /** Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. */
  evidenceOrigin: NamedNode<"https://schema.org/evidenceOrigin">;
  /** A creative work that this work is an example/instance/realization/derivation of. */
  exampleOfWork: NamedNode<"https://schema.org/exampleOfWork">;
  /**
   * Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to
   *       a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time
   *       should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be
   *       excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.
   */
  exceptDate: NamedNode<"https://schema.org/exceptDate">;
  /** The difference between the price at which a broker or other intermediary buys and sells foreign currency. */
  exchangeRateSpread: NamedNode<"https://schema.org/exchangeRateSpread">;
  /** A sub property of instrument. The exercise plan used on this action. */
  exercisePlan: NamedNode<"https://schema.org/exercisePlan">;
  /** A sub property of instrument. The diet used in this action. */
  exerciseRelatedDiet: NamedNode<"https://schema.org/exerciseRelatedDiet">;
  /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
  exerciseType: NamedNode<"https://schema.org/exerciseType">;
  /** exif data for this object. */
  exifData: NamedNode<"https://schema.org/exifData">;
  /** The earliest date the package may arrive. */
  expectedArrivalFrom: NamedNode<"https://schema.org/expectedArrivalFrom">;
  /** The latest date the package may arrive. */
  expectedArrivalUntil: NamedNode<"https://schema.org/expectedArrivalUntil">;
  /** The likely outcome in either the short term or long term of the medical condition. */
  expectedPrognosis: NamedNode<"https://schema.org/expectedPrognosis">;
  /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
  expectsAcceptanceOf: NamedNode<"https://schema.org/expectsAcceptanceOf">;
  /** Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient. */
  experienceInPlaceOfEducation: NamedNode<
    "http://schema.org/experienceInPlaceOfEducation"
  >;
  /** Description of skills and experience needed for the position or Occupation. */
  experienceRequirements: NamedNode<
    "https://schema.org/experienceRequirements"
  >;
  /** Medical expert advice related to the plan. */
  expertConsiderations: NamedNode<"https://schema.org/expertConsiderations">;
  /** Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date. */
  expires: NamedNode<"https://schema.org/expires">;
  /** Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system. */
  expressedIn: NamedNode<"https://schema.org/expressedIn">;
  /** Family name. In the U.S., the last name of a Person. */
  familyName: NamedNode<"https://schema.org/familyName">;
  /** The number of grams of fat. */
  fatContent: NamedNode<"https://schema.org/fatContent">;
  /** The fax number. */
  faxNumber: NamedNode<"https://schema.org/faxNumber">;
  /** Features or modules provided by this application (and possibly required by other applications). */
  featureList: NamedNode<"https://schema.org/featureList">;
  /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
  feesAndCommissionsSpecification: NamedNode<
    "http://schema.org/feesAndCommissionsSpecification"
  >;
  /** The number of grams of fiber. */
  fiberContent: NamedNode<"https://schema.org/fiberContent">;
  /** Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content, e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry. */
  fileFormat: NamedNode<"https://schema.org/fileFormat">;
  /** Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. */
  fileSize: NamedNode<"https://schema.org/fileSize">;
  /** A financial aid type or program which students may use to pay for tuition or fees associated with the program. */
  financialAidEligible: NamedNode<"https://schema.org/financialAidEligible">;
  /** Indicates the first known occurrence of a [[Claim]] in some [[CreativeWork]]. */
  firstAppearance: NamedNode<"https://schema.org/firstAppearance">;
  /** The date and place the work was first performed. */
  firstPerformance: NamedNode<"https://schema.org/firstPerformance">;
  /** The distance of the flight. */
  flightDistance: NamedNode<"https://schema.org/flightDistance">;
  /** The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. */
  flightNumber: NamedNode<"https://schema.org/flightNumber">;
  /**
   * The floor level for an [[Accommodation]] in a multi-storey building. Since counting
   *   systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.
   */
  floorLevel: NamedNode<"https://schema.org/floorLevel">;
  /** A floor limit is the amount of money above which credit card transactions must be authorized. */
  floorLimit: NamedNode<"https://schema.org/floorLimit">;
  /**
   * The size of the accommodation, e.g. in square meter or squarefoot.
   * Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard
   */
  floorSize: NamedNode<"https://schema.org/floorSize">;
  /** A sub property of object. The person or organization being followed. */
  followee: NamedNode<"https://schema.org/followee">;
  /** The most generic uni-directional social relation. */
  follows: NamedNode<"https://schema.org/follows">;
  /** Typical or recommended followup care after the procedure is performed. */
  followup: NamedNode<"https://schema.org/followup">;
  /** A sub property of location. The specific food establishment where the action occurred. */
  foodEstablishment: NamedNode<"https://schema.org/foodEstablishment">;
  /** A sub property of location. The specific food event where the action occurred. */
  foodEvent: NamedNode<"https://schema.org/foodEvent">;
  /** Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. */
  foodWarning: NamedNode<"https://schema.org/foodWarning">;
  /** A person who founded this organization. */
  founder: NamedNode<"https://schema.org/founder">;
  /** A person who founded this organization. */
  founders: NamedNode<"https://schema.org/founders">;
  /** The date that this organization was founded. */
  foundingDate: NamedNode<"https://schema.org/foundingDate">;
  /** The place where the Organization was founded. */
  foundingLocation: NamedNode<"https://schema.org/foundingLocation">;
  /** A flag to signal that the item, event, or place is accessible for free. */
  free: NamedNode<"https://schema.org/free">;
  /** A flag to signal that the item, event, or place is accessible for free. */
  isAccessibleForFree: NamedNode<"https://schema.org/isAccessibleForFree">;
  /** A monetary value above (or at) which the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]]. */
  freeShippingThreshold: NamedNode<"https://schema.org/freeShippingThreshold">;
  /** How often the dose is taken, e.g. 'daily'. */
  frequency: NamedNode<"https://schema.org/frequency">;
  /** A sub property of location. The original location of the object or the agent before the action. */
  fromLocation: NamedNode<"https://schema.org/fromLocation">;
  /** The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles). */
  fuelCapacity: NamedNode<"https://schema.org/fuelCapacity">;
  /** The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value. */
  fuelConsumption: NamedNode<"https://schema.org/fuelConsumption">;
  /** The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value. */
  fuelEfficiency: NamedNode<"https://schema.org/fuelEfficiency">;
  /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
  fuelType: NamedNode<"https://schema.org/fuelType">;
  /** The degree of mobility the joint allows. */
  functionalClass: NamedNode<"https://schema.org/functionalClass">;
  /** Indicates something directly or indirectly funded or sponsored through a [[Grant]]. See also [[ownershipFundingInfo]]. */
  fundedItem: NamedNode<"https://schema.org/fundedItem">;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: NamedNode<"https://schema.org/funding">;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: NamedNode<"https://schema.org/funder">;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: NamedNode<"https://schema.org/sponsor">;
  /** Video game which is played on this server. */
  game: NamedNode<"https://schema.org/game">;
  /** The server on which  it is possible to play the game. */
  gameServer: NamedNode<"https://schema.org/gameServer">;
  /** Indicates the availability type of the game content associated with this action, such as whether it is a full version or a demo. */
  gameAvailabilityType: NamedNode<"https://schema.org/gameAvailabilityType">;
  /** The edition of a video game. */
  gameEdition: NamedNode<"https://schema.org/gameEdition">;
  /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
  gameItem: NamedNode<"https://schema.org/gameItem">;
  /** Real or fictional location of the game (or part of game). */
  gameLocation: NamedNode<"https://schema.org/gameLocation">;
  /** The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>. */
  gamePlatform: NamedNode<"https://schema.org/gamePlatform">;
  /** Links to tips, tactics, etc. */
  gameTip: NamedNode<"https://schema.org/gameTip">;
  /** Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While http://schema.org/Male and http://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed". */
  gender: NamedNode<"https://schema.org/gender">;
  /** Genre of the creative work, broadcast channel or group. */
  genre: NamedNode<"https://schema.org/genre">;
  /** The geo coordinates of the place. */
  geo: NamedNode<"https://schema.org/geo">;
  /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoContains: NamedNode<"https://schema.org/geoContains">;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCoveredBy: NamedNode<"https://schema.org/geoCoveredBy">;
  /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCovers: NamedNode<"https://schema.org/geoCovers">;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCrosses: NamedNode<"https://schema.org/geoCrosses">;
  /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).) */
  geoDisjoint: NamedNode<"https://schema.org/geoDisjoint">;
  /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship). */
  geoEquals: NamedNode<"https://schema.org/geoEquals">;
  /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoIntersects: NamedNode<"https://schema.org/geoIntersects">;
  /** Indicates the GeoCoordinates at the centre of a GeoShape, e.g. GeoCircle. */
  geoMidpoint: NamedNode<"https://schema.org/geoMidpoint">;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoOverlaps: NamedNode<"https://schema.org/geoOverlaps">;
  /** Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation). */
  geoRadius: NamedNode<"https://schema.org/geoRadius">;
  /** Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).) */
  geoTouches: NamedNode<"https://schema.org/geoTouches">;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoWithin: NamedNode<"https://schema.org/geoWithin">;
  /** The geographic area associated with the audience. */
  geographicArea: NamedNode<"https://schema.org/geographicArea">;
  /** Information about getting tested (for a [[MedicalCondition]]), e.g. in the context of a pandemic. */
  gettingTestedInfo: NamedNode<"https://schema.org/gettingTestedInfo">;
  /** Given name. In the U.S., the first name of a Person. */
  givenName: NamedNode<"https://schema.org/givenName">;
  /** The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
  globalLocationNumber: NamedNode<"https://schema.org/globalLocationNumber">;
  /** governmentBenefitsInfo provides information about government benefits associated with a SpecialAnnouncement. */
  governmentBenefitsInfo: NamedNode<
    "https://schema.org/governmentBenefitsInfo"
  >;
  /** The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred. */
  gracePeriod: NamedNode<"https://schema.org/gracePeriod">;
  /** The person, organization, contact point, or audience that has been granted this permission. */
  grantee: NamedNode<"https://schema.org/grantee">;
  /** This ordering relation for qualitative values indicates that the subject is greater than the object. */
  greater: NamedNode<"https://schema.org/greater">;
  /** This ordering relation for qualitative values indicates that the subject is greater than or equal to the object. */
  greaterOrEqual: NamedNode<"https://schema.org/greaterOrEqual">;
  /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin12: NamedNode<"https://schema.org/gtin12">;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
   *
   * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs (URIs, IRIs, etc.). Details including regular expression examples can be found in, Section 6 of the GS1 URI Syntax specification; see also [schema.org tracking issue](https://github.com/schemaorg/schemaorg/issues/3156#issuecomment-1209522809) for schema.org-specific discussion. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
   *
   * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
   */
  gtin: NamedNode<"https://schema.org/gtin">;
  /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin13: NamedNode<"https://schema.org/gtin13">;
  /** The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin14: NamedNode<"https://schema.org/gtin14">;
  /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin8: NamedNode<"https://schema.org/gtin8">;
  /** A medical guideline related to this entity. */
  guideline: NamedNode<"https://schema.org/guideline">;
  /** Date on which this guideline's recommendation was made. */
  guidelineDate: NamedNode<"https://schema.org/guidelineDate">;
  /** The medical conditions, treatments, etc. that are the subject of the guideline. */
  guidelineSubject: NamedNode<"https://schema.org/guidelineSubject">;
  /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY).  This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates. */
  handlingTime: NamedNode<"https://schema.org/handlingTime">;
  /** Used to tag an item to be intended or suitable for consumption or use by adults only. */
  hasAdultConsideration: NamedNode<"https://schema.org/hasAdultConsideration">;
  /** Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. */
  hasBioChemEntityPart: NamedNode<"https://schema.org/hasBioChemEntityPart">;
  /** Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. */
  isPartOfBioChemEntity: NamedNode<"https://schema.org/isPartOfBioChemEntity">;
  /** A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
  hasBioPolymerSequence: NamedNode<"https://schema.org/hasBioPolymerSequence">;
  /** A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image. */
  hasRepresentation: NamedNode<"https://schema.org/hasRepresentation">;
  /** A broadcast channel of a broadcast service. */
  hasBroadcastChannel: NamedNode<"https://schema.org/hasBroadcastChannel">;
  /** The BroadcastService offered on this channel. */
  providesBroadcastService: NamedNode<
    "http://schema.org/providesBroadcastService"
  >;
  /** A Category code contained in this code set. */
  hasCategoryCode: NamedNode<"https://schema.org/hasCategoryCode">;
  /** A Defined Term contained in this term set. */
  hasDefinedTerm: NamedNode<"https://schema.org/hasDefinedTerm">;
  /** A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program. */
  hasCourse: NamedNode<"https://schema.org/hasCourse">;
  /** An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students. */
  hasCourseInstance: NamedNode<"https://schema.org/hasCourseInstance">;
  /** A credential awarded to the Person or Organization. */
  hasCredential: NamedNode<"https://schema.org/hasCredential">;
  /** Method used for delivery or shipping. */
  hasDeliveryMethod: NamedNode<"https://schema.org/hasDeliveryMethod">;
  /** A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public". */
  hasDigitalDocumentPermission: NamedNode<
    "http://schema.org/hasDigitalDocumentPermission"
  >;
  /** Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users. */
  hasDriveThroughService: NamedNode<
    "https://schema.org/hasDriveThroughService"
  >;
  /** Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard. */
  hasEnergyConsumptionDetails: NamedNode<
    "http://schema.org/hasEnergyConsumptionDetails"
  >;
  /** Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard. */
  hasEnergyEfficiencyCategory: NamedNode<
    "http://schema.org/hasEnergyEfficiencyCategory"
  >;
  /** Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects. */
  hasHealthAspect: NamedNode<"https://schema.org/hasHealthAspect">;
  /** A URL to a map of the place. */
  hasMap: NamedNode<"https://schema.org/hasMap">;
  /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
  hasMeasurement: NamedNode<"https://schema.org/hasMeasurement">;
  /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
  hasMenu: NamedNode<"https://schema.org/hasMenu">;
  /** A food or drink item contained in a menu or menu section. */
  hasMenuItem: NamedNode<"https://schema.org/hasMenuItem">;
  /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
  hasMenuSection: NamedNode<"https://schema.org/hasMenuSection">;
  /** Specifies a MerchantReturnPolicy that may be applicable. */
  hasMerchantReturnPolicy: NamedNode<
    "http://schema.org/hasMerchantReturnPolicy"
  >;
  /** Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence. */
  hasMolecularFunction: NamedNode<"https://schema.org/hasMolecularFunction">;
  /** The Person's occupation. For past professions, use Role for expressing dates. */
  hasOccupation: NamedNode<"https://schema.org/hasOccupation">;
  /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
  hasOfferCatalog: NamedNode<"https://schema.org/hasOfferCatalog">;
  /** Points-of-Sales operated by the organization or person. */
  hasPOS: NamedNode<"https://schema.org/hasPOS">;
  /** Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]). */
  hasVariant: NamedNode<"https://schema.org/hasVariant">;
  /** Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group. */
  isVariantOf: NamedNode<"https://schema.org/isVariantOf">;
  /** Headline of the article. */
  headline: NamedNode<"https://schema.org/headline">;
  /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
  healthCondition: NamedNode<"https://schema.org/healthCondition">;
  /** Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set? */
  healthPlanCoinsuranceOption: NamedNode<
    "http://schema.org/healthPlanCoinsuranceOption"
  >;
  /** The rate of coinsurance expressed as a number between 0.0 and 1.0. */
  healthPlanCoinsuranceRate: NamedNode<
    "http://schema.org/healthPlanCoinsuranceRate"
  >;
  /** The copay amount. */
  healthPlanCopay: NamedNode<"https://schema.org/healthPlanCopay">;
  /** Whether the copay is before or after deductible, etc. TODO: Is this a closed set? */
  healthPlanCopayOption: NamedNode<"https://schema.org/healthPlanCopayOption">;
  /** The costs to the patient for services under this network or formulary. */
  healthPlanCostSharing: NamedNode<"https://schema.org/healthPlanCostSharing">;
  /** TODO. */
  healthPlanDrugOption: NamedNode<"https://schema.org/healthPlanDrugOption">;
  /** The tier(s) of drugs offered by this formulary or insurance plan. */
  healthPlanDrugTier: NamedNode<"https://schema.org/healthPlanDrugTier">;
  /** The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.) */
  healthPlanId: NamedNode<"https://schema.org/healthPlanId">;
  /** The URL that goes directly to the plan brochure for the specific standard plan or plan variation. */
  healthPlanMarketingUrl: NamedNode<
    "https://schema.org/healthPlanMarketingUrl"
  >;
  /** Name or unique ID of network. (Networks are often reused across different insurance plans.) */
  healthPlanNetworkId: NamedNode<"https://schema.org/healthPlanNetworkId">;
  /** The tier(s) for this network. */
  healthPlanNetworkTier: NamedNode<"https://schema.org/healthPlanNetworkTier">;
  /** The category or type of pharmacy associated with this cost sharing. */
  healthPlanPharmacyCategory: NamedNode<
    "http://schema.org/healthPlanPharmacyCategory"
  >;
  /** Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]]. */
  healthcareReportingData: NamedNode<
    "http://schema.org/healthcareReportingData"
  >;
  /** The height of the item. */
  height: NamedNode<"https://schema.org/height">;
  /** The highest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  highPrice: NamedNode<"https://schema.org/highPrice">;
  /** Organization or Person offering the job position. */
  hiringOrganization: NamedNode<"https://schema.org/hiringOrganization">;
  /** A contact location for a person's residence. */
  homeLocation: NamedNode<"https://schema.org/homeLocation">;
  /** The home team in a sports event. */
  homeTeam: NamedNode<"https://schema.org/homeTeam">;
  /** An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. */
  honorificPrefix: NamedNode<"https://schema.org/honorificPrefix">;
  /** An honorific suffix following a Person's name such as M.D./PhD/MSCSW. */
  honorificSuffix: NamedNode<"https://schema.org/honorificSuffix">;
  /** A hospital with which the physician or office is affiliated. */
  hospitalAffiliation: NamedNode<"https://schema.org/hospitalAffiliation">;
  /** The organization (airline, travelers' club, etc.) the membership is made with. */
  hostingOrganization: NamedNode<"https://schema.org/hostingOrganization">;
  /** The hours during which this service or contact is available. */
  hoursAvailable: NamedNode<"https://schema.org/hoursAvailable">;
  /** How the procedure is performed. */
  howPerformed: NamedNode<"https://schema.org/howPerformed">;
  /** An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP. */
  httpMethod: NamedNode<"https://schema.org/httpMethod">;
  /** IATA identifier for an airline or airport. */
  iataCode: NamedNode<"https://schema.org/iataCode">;
  /** ICAO identifier for an airport. */
  icaoCode: NamedNode<"https://schema.org/icaoCode">;
  /** A physical examination that can identify this sign. */
  identifyingExam: NamedNode<"https://schema.org/identifyingExam">;
  /** A diagnostic test that can identify this sign. */
  identifyingTest: NamedNode<"https://schema.org/identifyingTest">;
  /** The illustrator of the book. */
  illustrator: NamedNode<"https://schema.org/illustrator">;
  /** An image of the item. This can be a [[URL]] or a fully described [[ImageObject]]. */
  image: NamedNode<"https://schema.org/image">;
  /** Imaging technique used. */
  imagingTechnique: NamedNode<"https://schema.org/imagingTechnique">;
  /** The album to which this recording belongs. */
  inAlbum: NamedNode<"https://schema.org/inAlbum">;
  /** The CableOrSatelliteService offering the channel. */
  inBroadcastLineup: NamedNode<"https://schema.org/inBroadcastLineup">;
  /** Non-proprietary identifier for molecular entity that can be used in printed and electronic data sources thus enabling easier linking of diverse data compilations. */
  inChI: NamedNode<"https://schema.org/inChI">;
  /** InChIKey is a hashed version of the full InChI (using the SHA-256 algorithm). */
  inChIKey: NamedNode<"https://schema.org/inChIKey">;
  /** A [[CategoryCodeSet]] that contains this category code. */
  inCodeSet: NamedNode<"https://schema.org/inCodeSet">;
  /** A [[DefinedTermSet]] that contains this term. */
  inDefinedTermSet: NamedNode<"https://schema.org/inDefinedTermSet">;
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: NamedNode<"https://schema.org/inLanguage">;
  /** The playlist to which this recording belongs. */
  inPlaylist: NamedNode<"https://schema.org/inPlaylist">;
  /** Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. */
  inProductGroupWithID: NamedNode<"https://schema.org/inProductGroupWithID">;
  /** Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.) */
  inStoreReturnsOffered: NamedNode<"https://schema.org/inStoreReturnsOffered">;
  /** Qualification, candidature, degree, application that Thesis supports. */
  inSupportOf: NamedNode<"https://schema.org/inSupportOf">;
  /** Description of bonus and commission compensation aspects of the job. */
  incentiveCompensation: NamedNode<"https://schema.org/incentiveCompensation">;
  /** Description of bonus and commission compensation aspects of the job. */
  incentives: NamedNode<"https://schema.org/incentives">;
  /** Smaller compositions included in this work (e.g. a movement in a symphony). */
  includedComposition: NamedNode<"https://schema.org/includedComposition">;
  /** A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog'). */
  includedDataCatalog: NamedNode<"https://schema.org/includedDataCatalog">;
  /** The insurance plans that cover this drug. */
  includedInHealthInsurancePlan: NamedNode<
    "http://schema.org/includedInHealthInsurancePlan"
  >;
  /** A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition. */
  includedRiskFactor: NamedNode<"https://schema.org/includedRiskFactor">;
  /** Attraction located at destination. */
  includesAttraction: NamedNode<"https://schema.org/includesAttraction">;
  /** Formularies covered by this plan. */
  includesHealthPlanFormulary: NamedNode<
    "http://schema.org/includesHealthPlanFormulary"
  >;
  /** Networks covered by this plan. */
  includesHealthPlanNetwork: NamedNode<
    "http://schema.org/includesHealthPlanNetwork"
  >;
  /** This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]]. */
  includesObject: NamedNode<"https://schema.org/includesObject">;
  /** The condition, complication, etc. influenced by this factor. */
  increasesRiskOf: NamedNode<"https://schema.org/increasesRiskOf">;
  /** The industry associated with the job position. */
  industry: NamedNode<"https://schema.org/industry">;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   *
   */
  ineligibleRegion: NamedNode<"https://schema.org/ineligibleRegion">;
  /** The actual infectious agent, such as a specific bacterium. */
  infectiousAgent: NamedNode<"https://schema.org/infectiousAgent">;
  /** The class of infectious agent (bacteria, prion, etc.) that causes the disease. */
  infectiousAgentClass: NamedNode<"https://schema.org/infectiousAgentClass">;
  /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
  ingredients: NamedNode<"https://schema.org/ingredients">;
  /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
  recipeIngredient: NamedNode<"https://schema.org/recipeIngredient">;
  /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
  supply: NamedNode<"https://schema.org/supply">;
  /** The individual who traces over the pencil drawings in ink after pencils are complete. */
  inker: NamedNode<"https://schema.org/inker">;
  /** The place of attachment of a muscle, or what the muscle moves. */
  insertion: NamedNode<"https://schema.org/insertion">;
  /** URL at which the app may be installed, if different from the URL of the item. */
  installUrl: NamedNode<"https://schema.org/installUrl">;
  /** A person assigned to instruct or provide instructional assistance for the [[CourseInstance]]. */
  instructor: NamedNode<"https://schema.org/instructor">;
  /** Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement. */
  intensity: NamedNode<"https://schema.org/intensity">;
  /** Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. */
  interactingDrug: NamedNode<"https://schema.org/interactingDrug">;
  /** This property is deprecated, alongside the UserInteraction types on which it depended. */
  interactionCount: NamedNode<"https://schema.org/interactionCount">;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
  interactionStatistic: NamedNode<"https://schema.org/interactionStatistic">;
  /** The WebSite or SoftwareApplication where the interactions took place. */
  interactionService: NamedNode<"https://schema.org/interactionService">;
  /** The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action. */
  interactionType: NamedNode<"https://schema.org/interactionType">;
  /** The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. */
  interactivityType: NamedNode<"https://schema.org/interactivityType">;
  /** The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate. */
  interestRate: NamedNode<"https://schema.org/interestRate">;
  /** Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]]. */
  interpretedAsClaim: NamedNode<"https://schema.org/interpretedAsClaim">;
  /** The current approximate inventory level for the item or items. */
  inventoryLevel: NamedNode<"https://schema.org/inventoryLevel">;
  /** Whether the provider is accepting new patients. */
  isAcceptingNewPatients: NamedNode<
    "https://schema.org/isAcceptingNewPatients"
  >;
  /** A pointer to another product (or multiple products) for which this product is an accessory or spare part. */
  isAccessoryOrSparePartFor: NamedNode<
    "http://schema.org/isAccessoryOrSparePartFor"
  >;
  /** True if the drug is available in a generic form (regardless of name). */
  isAvailableGenerically: NamedNode<
    "https://schema.org/isAvailableGenerically"
  >;
  /** A resource from which this work is derived or from which it is a modification or adaption. */
  isBasedOn: NamedNode<"https://schema.org/isBasedOn">;
  /** A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html. */
  isBasedOnUrl: NamedNode<"https://schema.org/isBasedOnUrl">;
  /** A pointer to another product (or multiple products) for which this product is a consumable. */
  isConsumableFor: NamedNode<"https://schema.org/isConsumableFor">;
  /** Indicates whether this content is family friendly. */
  isFamilyFriendly: NamedNode<"https://schema.org/isFamilyFriendly">;
  /** Indicates whether the offer was accepted as a gift for someone other than the buyer. */
  isGift: NamedNode<"https://schema.org/isGift">;
  /** Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence. */
  isInvolvedInBiologicalProcess: NamedNode<
    "http://schema.org/isInvolvedInBiologicalProcess"
  >;
  /** True if the broadcast is of a live event. */
  isLiveBroadcast: NamedNode<"https://schema.org/isLiveBroadcast">;
  /** Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence. */
  isLocatedInSubcellularLocation: NamedNode<
    "http://schema.org/isLocatedInSubcellularLocation"
  >;
  /** Indicates some accommodation that this floor plan describes. */
  isPlanForApartment: NamedNode<"https://schema.org/isPlanForApartment">;
  /** True if this item's name is a proprietary/brand name (vs. generic name). */
  isProprietary: NamedNode<"https://schema.org/isProprietary">;
  /** A pointer to another, somehow related product (or multiple products). */
  isRelatedTo: NamedNode<"https://schema.org/isRelatedTo">;
  /** Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality. */
  isResizable: NamedNode<"https://schema.org/isResizable">;
  /** A pointer to another, functionally similar product (or multiple products). */
  isSimilarTo: NamedNode<"https://schema.org/isSimilarTo">;
  /** This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings. */
  isUnlabelledFallback: NamedNode<"https://schema.org/isUnlabelledFallback">;
  /** The ISBN of the book. */
  isbn: NamedNode<"https://schema.org/isbn">;
  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
  isicV4: NamedNode<"https://schema.org/isicV4">;
  /** An organization identifier as defined in ISO 6523(-1). Note that many existing organization identifiers such as [leiCode](http://schema.org/leiCode), [duns](http://schema.org/duns) and [vatID](http://schema.org/vatID) can be expressed as an ISO 6523 identifier by setting the ICD part of the ISO 6523 identifier accordingly. */
  iso6523Code: NamedNode<"https://schema.org/iso6523Code">;
  /** The International Standard Recording Code for the recording. */
  isrcCode: NamedNode<"https://schema.org/isrcCode">;
  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
  issn: NamedNode<"https://schema.org/issn">;
  /** Identifies the issue of publication; for example, "iii" or "2". */
  issueNumber: NamedNode<"https://schema.org/issueNumber">;
  /** The organization issuing the ticket or permit. */
  issuedBy: NamedNode<"https://schema.org/issuedBy">;
  /** The service through which the permit was granted. */
  issuedThrough: NamedNode<"https://schema.org/issuedThrough">;
  /** The International Standard Musical Work Code for the composition. */
  iswcCode: NamedNode<"https://schema.org/iswcCode">;
  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists'). */
  item: NamedNode<"https://schema.org/item">;
  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
  itemCondition: NamedNode<"https://schema.org/itemCondition">;
  /** The type of return fees for returns of defect products. */
  itemDefectReturnFees: NamedNode<"https://schema.org/itemDefectReturnFees">;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a defect product. */
  itemDefectReturnLabelSource: NamedNode<
    "http://schema.org/itemDefectReturnLabelSource"
  >;
  /** Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]]. */
  itemDefectReturnShippingFeesAmount: NamedNode<
    "http://schema.org/itemDefectReturnShippingFeesAmount"
  >;
  /** For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases. */
  itemListElement: NamedNode<"https://schema.org/itemListElement">;
  /** Type of ordering (e.g. Ascending, Descending, Unordered). */
  itemListOrder: NamedNode<"https://schema.org/itemListOrder">;
  /** Current location of the item. */
  itemLocation: NamedNode<"https://schema.org/itemLocation">;
  /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
  itemOffered: NamedNode<"https://schema.org/itemOffered">;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *
   */
  offers: NamedNode<"https://schema.org/offers">;
  /** The item that is being reviewed/rated. */
  itemReviewed: NamedNode<"https://schema.org/itemReviewed">;
  /** Item(s) being shipped. */
  itemShipped: NamedNode<"https://schema.org/itemShipped">;
  /** Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples). */
  itinerary: NamedNode<"https://schema.org/itinerary">;
  /** Systematic method of naming chemical compounds as recommended by the International Union of Pure and Applied Chemistry (IUPAC). */
  iupacName: NamedNode<"https://schema.org/iupacName">;
  /** An indicator as to whether a position is available for an immediate start. */
  jobImmediateStart: NamedNode<"https://schema.org/jobImmediateStart">;
  /** A (typically single) geographic location associated with the job position. */
  jobLocation: NamedNode<"https://schema.org/jobLocation">;
  /** A description of the job location (e.g. TELECOMMUTE for telecommute jobs). */
  jobLocationType: NamedNode<"https://schema.org/jobLocationType">;
  /** The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible. */
  jobStartDate: NamedNode<"https://schema.org/jobStartDate">;
  /** The job title of the person (for example, Financial Manager). */
  jobTitle: NamedNode<"https://schema.org/jobTitle">;
  /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
  jurisdiction: NamedNode<"https://schema.org/jurisdiction">;
  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. */
  keywords: NamedNode<"https://schema.org/keywords">;
  /** A textual description of known damages, both repaired and unrepaired. */
  knownVehicleDamages: NamedNode<"https://schema.org/knownVehicleDamages">;
  /** The most generic bi-directional social/work relation. */
  knows: NamedNode<"https://schema.org/knows">;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions. */
  knowsAbout: NamedNode<"https://schema.org/knowsAbout">;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). */
  knowsLanguage: NamedNode<"https://schema.org/knowsLanguage">;
  /** Link to the drug's label details. */
  labelDetails: NamedNode<"https://schema.org/labelDetails">;
  /** A sub property of participant. The owner of the real estate property. */
  landlord: NamedNode<"https://schema.org/landlord">;
  /** A sub property of instrument. The language used on this action. */
  language: NamedNode<"https://schema.org/language">;
  /** Date on which the content on this web page was last reviewed for accuracy and/or completeness. */
  lastReviewed: NamedNode<"https://schema.org/lastReviewed">;
  /** The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  latitude: NamedNode<"https://schema.org/latitude">;
  /** A schematic image showing the floorplan layout. */
  layoutImage: NamedNode<"https://schema.org/layoutImage">;
  /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
  learningResourceType: NamedNode<"https://schema.org/learningResourceType">;
  /** Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property. */
  leaseLength: NamedNode<"https://schema.org/leaseLength">;
  /** The official name of the organization, e.g. the registered company name. */
  legalName: NamedNode<"https://schema.org/legalName">;
  /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
  legalStatus: NamedNode<"https://schema.org/legalStatus">;
  /** Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href="/legislationTransposes">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it. */
  legislationApplies: NamedNode<"https://schema.org/legislationApplies">;
  /** Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href="/legislationConsolidates">legislationConsolidates</a> property. */
  legislationChanges: NamedNode<"https://schema.org/legislationChanges">;
  /** Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change. */
  legislationConsolidates: NamedNode<
    "http://schema.org/legislationConsolidates"
  >;
  /** The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force. */
  legislationDate: NamedNode<"https://schema.org/legislationDate">;
  /** The point-in-time at which the provided description of the legislation is valid (e.g.: when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015") */
  legislationDateVersion: NamedNode<
    "https://schema.org/legislationDateVersion"
  >;
  /** An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex. */
  legislationIdentifier: NamedNode<"https://schema.org/legislationIdentifier">;
  /** The jurisdiction from which the legislation originates. */
  legislationJurisdiction: NamedNode<
    "http://schema.org/legislationJurisdiction"
  >;
  /** Whether the legislation is currently in force, not in force, or partially in force. */
  legislationLegalForce: NamedNode<"https://schema.org/legislationLegalForce">;
  /** The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act. */
  legislationLegalValue: NamedNode<"https://schema.org/legislationLegalValue">;
  /** The person or organization that originally passed or made the law: typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author. */
  legislationPassedBy: NamedNode<"https://schema.org/legislationPassedBy">;
  /** An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published. */
  legislationResponsible: NamedNode<
    "https://schema.org/legislationResponsible"
  >;
  /** Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations. */
  legislationTransposes: NamedNode<"https://schema.org/legislationTransposes">;
  /** The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "règlement grand-ducal", etc., depending on the country. */
  legislationType: NamedNode<"https://schema.org/legislationType">;
  /** An organization identifier that uniquely identifies a legal entity as defined in ISO 17442. */
  leiCode: NamedNode<"https://schema.org/leiCode">;
  /** A sub property of participant. The person that lends the object being borrowed. */
  lender: NamedNode<"https://schema.org/lender">;
  /** This ordering relation for qualitative values indicates that the subject is lesser than the object. */
  lesser: NamedNode<"https://schema.org/lesser">;
  /** This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object. */
  lesserOrEqual: NamedNode<"https://schema.org/lesserOrEqual">;
  /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
  letterer: NamedNode<"https://schema.org/letterer">;
  /** A license document that applies to this content, typically indicated by URL. */
  license: NamedNode<"https://schema.org/license">;
  /** A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space. */
  line: NamedNode<"https://schema.org/line">;
  /** Indicates the relationship type of a Web link. */
  linkRelationship: NamedNode<"https://schema.org/linkRelationship">;
  /** An update to the LiveBlog. */
  liveBlogUpdate: NamedNode<"https://schema.org/liveBlogUpdate">;
  /** Amount of mortgage mandate that can be converted into a proper mortgage at a later stage. */
  loanMortgageMandateAmount: NamedNode<
    "http://schema.org/loanMortgageMandateAmount"
  >;
  /** The amount of money to pay in a single payment. */
  loanPaymentAmount: NamedNode<"https://schema.org/loanPaymentAmount">;
  /** Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time. */
  loanPaymentFrequency: NamedNode<"https://schema.org/loanPaymentFrequency">;
  /** A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment. */
  loanRepaymentForm: NamedNode<"https://schema.org/loanRepaymentForm">;
  /** The duration of the loan or credit agreement. */
  loanTerm: NamedNode<"https://schema.org/loanTerm">;
  /** The type of a loan or credit. */
  loanType: NamedNode<"https://schema.org/loanType">;
  /** The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. */
  locationCreated: NamedNode<"https://schema.org/locationCreated">;
  /** A full description of the lodging unit. */
  lodgingUnitDescription: NamedNode<
    "https://schema.org/lodgingUnitDescription"
  >;
  /** Textual description of the unit type (including suite vs. room, size of bed, etc.). */
  lodgingUnitType: NamedNode<"https://schema.org/lodgingUnitType">;
  /** An associated logo. */
  logo: NamedNode<"https://schema.org/logo">;
  /** The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  longitude: NamedNode<"https://schema.org/longitude">;
  /** A sub property of participant. The loser of the action. */
  loser: NamedNode<"https://schema.org/loser">;
  /** The lowest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  lowPrice: NamedNode<"https://schema.org/lowPrice">;
  /** The person who wrote the words. */
  lyricist: NamedNode<"https://schema.org/lyricist">;
  /** The words in the song. */
  lyrics: NamedNode<"https://schema.org/lyrics">;
  /** Indicates the primary entity described in some page or other CreativeWork. */
  mainEntity: NamedNode<"https://schema.org/mainEntity">;
  /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details. */
  mainEntityOfPage: NamedNode<"https://schema.org/mainEntityOfPage">;
  /**
   * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
   *
   */
  maintainer: NamedNode<"https://schema.org/maintainer">;
  /** A pointer to products or services offered by the organization or person. */
  makesOffer: NamedNode<"https://schema.org/makesOffer">;
  /** A pointer to the organization or person making the offer. */
  offeredBy: NamedNode<"https://schema.org/offeredBy">;
  /** The manufacturer of the product. */
  manufacturer: NamedNode<"https://schema.org/manufacturer">;
  /** A URL to a map of the place. */
  map: NamedNode<"https://schema.org/map">;
  /** Indicates the kind of Map, from the MapCategoryType Enumeration. */
  mapType: NamedNode<"https://schema.org/mapType">;
  /** A URL to a map of the place. */
  maps: NamedNode<"https://schema.org/maps">;
  /** A marginOfError for an [[Observation]]. */
  marginOfError: NamedNode<"https://schema.org/marginOfError">;
  /** For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management. */
  masthead: NamedNode<"https://schema.org/masthead">;
  /** The quantity of the materials being described or an expression of the physical space they occupy. */
  materialExtent: NamedNode<"https://schema.org/materialExtent">;
  /** A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard. */
  mathExpression: NamedNode<"https://schema.org/mathExpression">;
  /** The highest price if the price is a range. */
  maxPrice: NamedNode<"https://schema.org/maxPrice">;
  /** The upper value of some characteristic or property. */
  maxValue: NamedNode<"https://schema.org/maxValue">;
  /** The total number of individuals that may attend an event or venue. */
  maximumAttendeeCapacity: NamedNode<
    "http://schema.org/maximumAttendeeCapacity"
  >;
  /** The maximum number of students who may be enrolled in the program. */
  maximumEnrollment: NamedNode<"https://schema.org/maximumEnrollment">;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  maximumIntake: NamedNode<"https://schema.org/maximumIntake">;
  /** The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). */
  maximumPhysicalAttendeeCapacity: NamedNode<
    "http://schema.org/maximumPhysicalAttendeeCapacity"
  >;
  /** The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). */
  maximumVirtualAttendeeCapacity: NamedNode<
    "http://schema.org/maximumVirtualAttendeeCapacity"
  >;
  /** Description of the meals that will be provided or available for purchase. */
  mealService: NamedNode<"https://schema.org/mealService">;
  /** The measuredProperty of an [[Observation]], either a schema.org property, a property from other RDF-compatible systems, e.g. W3C RDF Data Cube, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties). */
  measuredProperty: NamedNode<"https://schema.org/measuredProperty">;
  /** The measuredValue of an [[Observation]]. */
  measuredValue: NamedNode<"https://schema.org/measuredValue">;
  /**
   * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
   * corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   *
   * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   *
   * If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
   *
   */
  measurementTechnique: NamedNode<"https://schema.org/measurementTechnique">;
  /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
  mechanismOfAction: NamedNode<"https://schema.org/mechanismOfAction">;
  /** Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared). */
  mediaAuthenticityCategory: NamedNode<
    "http://schema.org/mediaAuthenticityCategory"
  >;
  /** In the context of a [[MediaReview]], indicates specific media item(s) that are grouped using a [[MediaReviewItem]]. */
  mediaItemAppearance: NamedNode<"https://schema.org/mediaItemAppearance">;
  /** The median value. */
  median: NamedNode<"https://schema.org/median">;
  /** Medical audience for page. */
  medicalAudience: NamedNode<"https://schema.org/medicalAudience">;
  /** A medical specialty of the provider. */
  medicalSpecialty: NamedNode<"https://schema.org/medicalSpecialty">;
  /** The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. */
  medicineSystem: NamedNode<"https://schema.org/medicineSystem">;
  /** Indicates that the vehicle meets the respective emission standard. */
  meetsEmissionStandard: NamedNode<"https://schema.org/meetsEmissionStandard">;
  /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
  member: NamedNode<"https://schema.org/member">;
  /** A member of this organization. */
  members: NamedNode<"https://schema.org/members">;
  /** A unique identifier for the membership. */
  membershipNumber: NamedNode<"https://schema.org/membershipNumber">;
  /** The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.) */
  membershipPointsEarned: NamedNode<
    "https://schema.org/membershipPointsEarned"
  >;
  /** Minimum memory requirements. */
  memoryRequirements: NamedNode<"https://schema.org/memoryRequirements">;
  /** Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. */
  mentions: NamedNode<"https://schema.org/mentions">;
  /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
  menu: NamedNode<"https://schema.org/menu">;
  /** Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item. */
  menuAddOn: NamedNode<"https://schema.org/menuAddOn">;
  /** 'merchant' is an out-dated term for 'seller'. */
  merchant: NamedNode<"https://schema.org/merchant">;
  /** An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider. */
  seller: NamedNode<"https://schema.org/seller">;
  /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]]. */
  merchantReturnDays: NamedNode<"https://schema.org/merchantReturnDays">;
  /** Specifies a Web page or service by URL, for product returns. */
  merchantReturnLink: NamedNode<"https://schema.org/merchantReturnLink">;
  /** A CreativeWork attached to the message. */
  messageAttachment: NamedNode<"https://schema.org/messageAttachment">;
  /** The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles */
  mileageFromOdometer: NamedNode<"https://schema.org/mileageFromOdometer">;
  /** The lowest price if the price is a range. */
  minPrice: NamedNode<"https://schema.org/minPrice">;
  /** The lower value of some characteristic or property. */
  minValue: NamedNode<"https://schema.org/minValue">;
  /** The minimum payment required at this time. */
  minimumPaymentDue: NamedNode<"https://schema.org/minimumPaymentDue">;
  /** For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues. */
  missionCoveragePrioritiesPolicy: NamedNode<
    "http://schema.org/missionCoveragePrioritiesPolicy"
  >;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   *
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   *
   */
  mobileUrl: NamedNode<"https://schema.org/mobileUrl">;
  /** The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. */
  model: NamedNode<"https://schema.org/model">;
  /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
  modelDate: NamedNode<"https://schema.org/modelDate">;
  /** The date and time the reservation was modified. */
  modifiedTime: NamedNode<"https://schema.org/modifiedTime">;
  /** The empirical formula is the simplest whole number ratio of all the atoms in a molecule. */
  molecularFormula: NamedNode<"https://schema.org/molecularFormula">;
  /** This is the molecular weight of the entity being described, not of the parent. Units should be included in the form '&lt;Number&gt; &lt;unit&gt;', for example '12 amu' or as '&lt;QuantitativeValue&gt;. */
  molecularWeight: NamedNode<"https://schema.org/molecularWeight">;
  /** The monoisotopic mass is the sum of the masses of the atoms in a molecule using the unbound, ground-state, rest mass of the principal (most abundant) isotope for each element instead of the isotopic average mass. Please include the units in the form '&lt;Number&gt; &lt;unit&gt;', for example '770.230488 g/mol' or as '&lt;QuantitativeValue&gt;. */
  monoisotopicMolecularWeight: NamedNode<
    "http://schema.org/monoisotopicMolecularWeight"
  >;
  /** The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month. */
  monthlyMinimumRepaymentAmount: NamedNode<
    "http://schema.org/monthlyMinimumRepaymentAmount"
  >;
  /** Indicates the minimal number of months of experience required for a position. */
  monthsOfExperience: NamedNode<"https://schema.org/monthsOfExperience">;
  /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
  mpn: NamedNode<"https://schema.org/mpn">;
  /** Whether multiple values are allowed for the property.  Default is false. */
  multipleValues: NamedNode<"https://schema.org/multipleValues">;
  /** The movement the muscle generates. */
  muscleAction: NamedNode<"https://schema.org/muscleAction">;
  /** An arrangement derived from the composition. */
  musicArrangement: NamedNode<"https://schema.org/musicArrangement">;
  /** The composer of the soundtrack. */
  musicBy: NamedNode<"https://schema.org/musicBy">;
  /** The type of composition (e.g. overture, sonata, symphony, etc.). */
  musicCompositionForm: NamedNode<"https://schema.org/musicCompositionForm">;
  /** A member of a music group&#x2014;for example, John, Paul, George, or Ringo. */
  musicGroupMember: NamedNode<"https://schema.org/musicGroupMember">;
  /** Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.). */
  musicReleaseFormat: NamedNode<"https://schema.org/musicReleaseFormat">;
  /** The key, mode, or scale this composition uses. */
  musicalKey: NamedNode<"https://schema.org/musicalKey">;
  /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
  naics: NamedNode<"https://schema.org/naics">;
  /** The name of the item. */
  name: NamedNode<"https://schema.org/name">;
  /** A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'. */
  namedPosition: NamedNode<"https://schema.org/namedPosition">;
  /** A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'. */
  roleName: NamedNode<"https://schema.org/roleName">;
  /** Nationality of the person. */
  nationality: NamedNode<"https://schema.org/nationality">;
  /** The expected progression of the condition if it is not treated and allowed to progress naturally. */
  naturalProgression: NamedNode<"https://schema.org/naturalProgression">;
  /**
   * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions
   * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
   */
  negativeNotes: NamedNode<"https://schema.org/negativeNotes">;
  /** The underlying innervation associated with the muscle. */
  nerve: NamedNode<"https://schema.org/nerve">;
  /** The neurological pathway extension that involves muscle control. */
  nerveMotor: NamedNode<"https://schema.org/nerveMotor">;
  /** The total financial value of the person as calculated by subtracting assets from liabilities. */
  netWorth: NamedNode<"https://schema.org/netWorth">;
  /** Indicates a page with news updates and guidelines. This could often be (but is not required to be) the main page containing [[SpecialAnnouncement]] markup on a site. */
  newsUpdatesAndGuidelines: NamedNode<
    "http://schema.org/newsUpdatesAndGuidelines"
  >;
  /** A link to the ListItem that follows the current one. */
  nextItem: NamedNode<"https://schema.org/nextItem">;
  /** For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines. */
  noBylinesPolicy: NamedNode<"https://schema.org/noBylinesPolicy">;
  /** This ordering relation for qualitative values indicates that the subject is not equal to the object. */
  nonEqual: NamedNode<"https://schema.org/nonEqual">;
  /** The generic name of this drug or supplement. */
  nonProprietaryName: NamedNode<"https://schema.org/nonProprietaryName">;
  /** nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business. */
  nonprofitStatus: NamedNode<"https://schema.org/nonprofitStatus">;
  /** Range of acceptable values for a typical patient, when applicable. */
  normalRange: NamedNode<"https://schema.org/normalRange">;
  /** Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. */
  nsn: NamedNode<"https://schema.org/nsn">;
  /** The number of adults staying in the unit. */
  numAdults: NamedNode<"https://schema.org/numAdults">;
  /** The number of children staying in the unit. */
  numChildren: NamedNode<"https://schema.org/numChildren">;
  /** Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]]. */
  numConstraints: NamedNode<"https://schema.org/numConstraints">;
  /** The number of tracks in this album or playlist. */
  numTracks: NamedNode<"https://schema.org/numTracks">;
  /** Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]]. */
  numberOfAccommodationUnits: NamedNode<
    "http://schema.org/numberOfAccommodationUnits"
  >;
  /** The number or type of airbags in the vehicle. */
  numberOfAirbags: NamedNode<"https://schema.org/numberOfAirbags">;
  /** Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]]. */
  numberOfAvailableAccommodationUnits: NamedNode<
    "http://schema.org/numberOfAvailableAccommodationUnits"
  >;
  /** The number of axles.\n\nTypical unit code(s): C62 */
  numberOfAxles: NamedNode<"https://schema.org/numberOfAxles">;
  /** The total integer number of bathrooms in some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also [[numberOfRooms]]. */
  numberOfBathroomsTotal: NamedNode<
    "https://schema.org/numberOfBathroomsTotal"
  >;
  /** The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]]. */
  numberOfBedrooms: NamedNode<"https://schema.org/numberOfBedrooms">;
  /** The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment. */
  numberOfBeds: NamedNode<"https://schema.org/numberOfBeds">;
  /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
  numberOfCredits: NamedNode<"https://schema.org/numberOfCredits">;
  /** The number of doors.\n\nTypical unit code(s): C62 */
  numberOfDoors: NamedNode<"https://schema.org/numberOfDoors">;
  /** The number of employees in an organization, e.g. business. */
  numberOfEmployees: NamedNode<"https://schema.org/numberOfEmployees">;
  /** The number of episodes in this season or series. */
  numberOfEpisodes: NamedNode<"https://schema.org/numberOfEpisodes">;
  /** The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62 */
  numberOfForwardGears: NamedNode<"https://schema.org/numberOfForwardGears">;
  /** Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field). */
  numberOfFullBathrooms: NamedNode<"https://schema.org/numberOfFullBathrooms">;
  /** The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list. */
  numberOfItems: NamedNode<"https://schema.org/numberOfItems">;
  /** The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date. */
  numberOfLoanPayments: NamedNode<"https://schema.org/numberOfLoanPayments">;
  /** The number of pages in the book. */
  numberOfPages: NamedNode<"https://schema.org/numberOfPages">;
  /** Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). */
  numberOfPartialBathrooms: NamedNode<
    "http://schema.org/numberOfPartialBathrooms"
  >;
  /** Indicate how many people can play this game (minimum, maximum, or range). */
  numberOfPlayers: NamedNode<"https://schema.org/numberOfPlayers">;
  /** The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62 */
  numberOfPreviousOwners: NamedNode<
    "https://schema.org/numberOfPreviousOwners"
  >;
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   */
  numberOfRooms: NamedNode<"https://schema.org/numberOfRooms">;
  /** The number of seasons in this series. */
  numberOfSeasons: NamedNode<"https://schema.org/numberOfSeasons">;
  /** A number associated with a role in an organization, for example, the number on an athlete's jersey. */
  numberedPosition: NamedNode<"https://schema.org/numberedPosition">;
  /** Nutrition information about the recipe or menu item. */
  nutrition: NamedNode<"https://schema.org/nutrition">;
  /** The observationDate of an [[Observation]]. */
  observationDate: NamedNode<"https://schema.org/observationDate">;
  /** The observedNode of an [[Observation]], often a [[StatisticalPopulation]]. */
  observedNode: NamedNode<"https://schema.org/observedNode">;
  /**
   * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
   * Typical unit code(s): C62 for person
   */
  occupancy: NamedNode<"https://schema.org/occupancy">;
  /**  The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions. */
  occupationLocation: NamedNode<"https://schema.org/occupationLocation">;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory: NamedNode<"https://schema.org/occupationalCategory">;
  /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
  occupationalCredentialAwarded: NamedNode<
    "http://schema.org/occupationalCredentialAwarded"
  >;
  /** The number of offers for the product. */
  offerCount: NamedNode<"https://schema.org/offerCount">;
  /** Whether prescriptions can be delivered by mail. */
  offersPrescriptionByMail: NamedNode<
    "http://schema.org/offersPrescriptionByMail"
  >;
  /** The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>. */
  openingHours: NamedNode<"https://schema.org/openingHours">;
  /** The opening hours of a certain place. */
  openingHoursSpecification: NamedNode<
    "http://schema.org/openingHoursSpecification"
  >;
  /** The opening hour of the place or service on the given day(s) of the week. */
  opens: NamedNode<"https://schema.org/opens">;
  /** Operating systems supported (Windows 7, OS X 10.6, Android 1.6). */
  operatingSystem: NamedNode<"https://schema.org/operatingSystem">;
  /** A sub property of participant. The opponent on this action. */
  opponent: NamedNode<"https://schema.org/opponent">;
  /** A sub property of object. The options subject to this action. */
  option: NamedNode<"https://schema.org/option">;
  /** Date order was placed. */
  orderDate: NamedNode<"https://schema.org/orderDate">;
  /** The delivery of the parcel related to this order or order item. */
  orderDelivery: NamedNode<"https://schema.org/orderDelivery">;
  /** The identifier of the order item. */
  orderItemNumber: NamedNode<"https://schema.org/orderItemNumber">;
  /** The current status of the order item. */
  orderItemStatus: NamedNode<"https://schema.org/orderItemStatus">;
  /** The identifier of the transaction. */
  orderNumber: NamedNode<"https://schema.org/orderNumber">;
  /** The number of the item ordered. If the property is not set, assume the quantity is one. */
  orderQuantity: NamedNode<"https://schema.org/orderQuantity">;
  /** The current status of the order. */
  orderStatus: NamedNode<"https://schema.org/orderStatus">;
  /** The item ordered. */
  orderedItem: NamedNode<"https://schema.org/orderedItem">;
  /** An organizer of an Event. */
  organizer: NamedNode<"https://schema.org/organizer">;
  /** Shipper's address. */
  originAddress: NamedNode<"https://schema.org/originAddress">;
  /** Describes, in a [[MediaReview]] when dealing with [[DecontextualizedContent]], background information that can contribute to better interpretation of the [[MediaObject]]. */
  originalMediaContextDescription: NamedNode<
    "http://schema.org/originalMediaContextDescription"
  >;
  /** Link to the page containing an original version of the content, or directly to an online copy of the original [[MediaObject]] content, e.g. video file. */
  originalMediaLink: NamedNode<"https://schema.org/originalMediaLink">;
  /** The vasculature the lymphatic structure originates, or afferents, from. */
  originatesFrom: NamedNode<"https://schema.org/originatesFrom">;
  /** Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. */
  overdosage: NamedNode<"https://schema.org/overdosage">;
  /** The date and time of obtaining the product. */
  ownedFrom: NamedNode<"https://schema.org/ownedFrom">;
  /** The date and time of giving up ownership on the product. */
  ownedThrough: NamedNode<"https://schema.org/ownedThrough">;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable. */
  ownershipFundingInfo: NamedNode<"https://schema.org/ownershipFundingInfo">;
  /** Products owned by the organization or person. */
  owns: NamedNode<"https://schema.org/owns">;
  /** The page on which the work ends; for example "138" or "xvi". */
  pageEnd: NamedNode<"https://schema.org/pageEnd">;
  /** The page on which the work starts; for example "135" or "xiii". */
  pageStart: NamedNode<"https://schema.org/pageStart">;
  /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
  pagination: NamedNode<"https://schema.org/pagination">;
  /** A parent of this person. */
  parent: NamedNode<"https://schema.org/parent">;
  /** The parent of a question, answer or item in general. */
  parentItem: NamedNode<"https://schema.org/parentItem">;
  /** A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. */
  subOrganization: NamedNode<"https://schema.org/subOrganization">;
  /** A broadcast service to which the broadcast service may belong to such as regional variations of a national channel. */
  parentService: NamedNode<"https://schema.org/parentService">;
  /** A parents of the person. */
  parents: NamedNode<"https://schema.org/parents">;
  /** The episode to which this clip belongs. */
  partOfEpisode: NamedNode<"https://schema.org/partOfEpisode">;
  /** The order is being paid as part of the referenced Invoice. */
  partOfInvoice: NamedNode<"https://schema.org/partOfInvoice">;
  /** The overall order the items in this delivery were included in. */
  partOfOrder: NamedNode<"https://schema.org/partOfOrder">;
  /** The season to which this episode belongs. */
  partOfSeason: NamedNode<"https://schema.org/partOfSeason">;
  /** The series to which this episode or season belongs. */
  partOfSeries: NamedNode<"https://schema.org/partOfSeries">;
  /** The anatomical or organ system that this structure is part of. */
  partOfSystem: NamedNode<"https://schema.org/partOfSystem">;
  /** The TV series to which this episode or season belongs. */
  partOfTVSeries: NamedNode<"https://schema.org/partOfTVSeries">;
  /** Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip. */
  partOfTrip: NamedNode<"https://schema.org/partOfTrip">;
  /** Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip. */
  subTrip: NamedNode<"https://schema.org/subTrip">;
  /** Number of people the reservation should accommodate. */
  partySize: NamedNode<"https://schema.org/partySize">;
  /** The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority). */
  passengerPriorityStatus: NamedNode<
    "http://schema.org/passengerPriorityStatus"
  >;
  /** The passenger's sequence number as assigned by the airline. */
  passengerSequenceNumber: NamedNode<
    "http://schema.org/passengerSequenceNumber"
  >;
  /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
  pathophysiology: NamedNode<"https://schema.org/pathophysiology">;
  /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
  pattern: NamedNode<"https://schema.org/pattern">;
  /** The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
  payload: NamedNode<"https://schema.org/payload">;
  /** Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc. */
  paymentAccepted: NamedNode<"https://schema.org/paymentAccepted">;
  /** The date that payment is due. */
  paymentDue: NamedNode<"https://schema.org/paymentDue">;
  /** The date that payment is due. */
  paymentDueDate: NamedNode<"https://schema.org/paymentDueDate">;
  /** The name of the credit card or other method of payment for the order. */
  paymentMethod: NamedNode<"https://schema.org/paymentMethod">;
  /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
  paymentMethodId: NamedNode<"https://schema.org/paymentMethodId">;
  /** The status of payment; whether the invoice has been paid or not. */
  paymentStatus: NamedNode<"https://schema.org/paymentStatus">;
  /** The URL for sending a payment. */
  paymentUrl: NamedNode<"https://schema.org/paymentUrl">;
  /** The individual who draws the primary narrative artwork. */
  penciler: NamedNode<"https://schema.org/penciler">;
  /** The 10th percentile value. */
  percentile10: NamedNode<"https://schema.org/percentile10">;
  /** The 25th percentile value. */
  percentile25: NamedNode<"https://schema.org/percentile25">;
  /** The 75th percentile value. */
  percentile75: NamedNode<"https://schema.org/percentile75">;
  /** The 90th percentile value. */
  percentile90: NamedNode<"https://schema.org/percentile90">;
  /** A performer at the event&#x2014;for example, a presenter, musician, musical group or actor. */
  performer: NamedNode<"https://schema.org/performer">;
  /** Event that this person is a performer or participant in. */
  performerIn: NamedNode<"https://schema.org/performerIn">;
  /** The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor. */
  performers: NamedNode<"https://schema.org/performers">;
  /** The type of permission granted the person, organization, or audience. */
  permissionType: NamedNode<"https://schema.org/permissionType">;
  /** Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). */
  permissions: NamedNode<"https://schema.org/permissions">;
  /** The target audience for this permit. */
  permitAudience: NamedNode<"https://schema.org/permitAudience">;
  /** Indications regarding the permitted usage of the accommodation. */
  permittedUsage: NamedNode<"https://schema.org/permittedUsage">;
  /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
  petsAllowed: NamedNode<"https://schema.org/petsAllowed">;
  /** Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/. */
  phoneticText: NamedNode<"https://schema.org/phoneticText">;
  /** A photograph of this place. */
  photo: NamedNode<"https://schema.org/photo">;
  /** Photographs of this place. */
  photos: NamedNode<"https://schema.org/photos">;
  /** A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
  physicalRequirement: NamedNode<"https://schema.org/physicalRequirement">;
  /** Specific physiologic benefits associated to the plan. */
  physiologicalBenefits: NamedNode<"https://schema.org/physiologicalBenefits">;
  /** Where a taxi will pick up a passenger or a rental car can be picked up. */
  pickupLocation: NamedNode<"https://schema.org/pickupLocation">;
  /** When a taxi will pick up a passenger or a rental car can be picked up. */
  pickupTime: NamedNode<"https://schema.org/pickupTime">;
  /** Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time. */
  playMode: NamedNode<"https://schema.org/playMode">;
  /** Player type required&#x2014;for example, Flash or Silverlight. */
  playerType: NamedNode<"https://schema.org/playerType">;
  /** Number of players on the server. */
  playersOnline: NamedNode<"https://schema.org/playersOnline">;
  /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical. */
  polygon: NamedNode<"https://schema.org/polygon">;
  /** Indicates the populationType common to all members of a [[StatisticalPopulation]]. */
  populationType: NamedNode<"https://schema.org/populationType">;
  /**
   * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
   */
  positiveNotes: NamedNode<"https://schema.org/positiveNotes">;
  /** A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc. */
  possibleComplication: NamedNode<"https://schema.org/possibleComplication">;
  /** A possible treatment to address this condition, sign or symptom. */
  possibleTreatment: NamedNode<"https://schema.org/possibleTreatment">;
  /** The post office box number for PO box addresses. */
  postOfficeBoxNumber: NamedNode<"https://schema.org/postOfficeBoxNumber">;
  /** A description of the postoperative procedures, care, and/or followups for this device. */
  postOp: NamedNode<"https://schema.org/postOp">;
  /** The postal code. For example, 94043. */
  postalCode: NamedNode<"https://schema.org/postalCode">;
  /** First postal code in a range (included). */
  postalCodeBegin: NamedNode<"https://schema.org/postalCodeBegin">;
  /** Last postal code in the range (included). Needs to be after [[postalCodeBegin]]. */
  postalCodeEnd: NamedNode<"https://schema.org/postalCodeEnd">;
  /** A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK. */
  postalCodePrefix: NamedNode<"https://schema.org/postalCodePrefix">;
  /** A defined range of postal codes. */
  postalCodeRange: NamedNode<"https://schema.org/postalCodeRange">;
  /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
  potentialAction: NamedNode<"https://schema.org/potentialAction">;
  /** Intended use of the BioChemEntity by humans. */
  potentialUse: NamedNode<"https://schema.org/potentialUse">;
  /** A description of the workup, testing, and other preparations required before implanting this device. */
  preOp: NamedNode<"https://schema.org/preOp">;
  /** A pointer from a previous, often discontinued variant of the product to its newer variant. */
  predecessorOf: NamedNode<"https://schema.org/predecessorOf">;
  /** Pregnancy category of this drug. */
  pregnancyCategory: NamedNode<"https://schema.org/pregnancyCategory">;
  /** Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. */
  pregnancyWarning: NamedNode<"https://schema.org/pregnancyWarning">;
  /** The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  prepTime: NamedNode<"https://schema.org/prepTime">;
  /** Typical preparation that a patient must undergo before having the procedure performed. */
  preparation: NamedNode<"https://schema.org/preparation">;
  /** Link to prescribing information for the drug. */
  prescribingInfo: NamedNode<"https://schema.org/prescribingInfo">;
  /** Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc. */
  prescriptionStatus: NamedNode<"https://schema.org/prescriptionStatus">;
  /** A link to the ListItem that precedes the current one. */
  previousItem: NamedNode<"https://schema.org/previousItem">;
  /** Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. */
  previousStartDate: NamedNode<"https://schema.org/previousStartDate">;
  /**
   * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
   *
   */
  price: NamedNode<"https://schema.org/price">;
  /** This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node. */
  priceComponent: NamedNode<"https://schema.org/priceComponent">;
  /** Identifies a price component (for example, a line item on an invoice), part of the total price for an offer. */
  priceComponentType: NamedNode<"https://schema.org/priceComponentType">;
  /** The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  priceCurrency: NamedNode<"https://schema.org/priceCurrency">;
  /** The price range of the business, for example ```$$$```. */
  priceRange: NamedNode<"https://schema.org/priceRange">;
  /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
  priceSpecification: NamedNode<"https://schema.org/priceSpecification">;
  /** Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration. */
  priceType: NamedNode<"https://schema.org/priceType">;
  /** The date after which the price is no longer available. */
  priceValidUntil: NamedNode<"https://schema.org/priceValidUntil">;
  /** Indicates the main image on the page. */
  primaryImageOfPage: NamedNode<"https://schema.org/primaryImageOfPage">;
  /** A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination. */
  primaryPrevention: NamedNode<"https://schema.org/primaryPrevention">;
  /** The number of the column in which the NewsArticle appears in the print edition. */
  printColumn: NamedNode<"https://schema.org/printColumn">;
  /** The edition of the print product in which the NewsArticle appears. */
  printEdition: NamedNode<"https://schema.org/printEdition">;
  /** If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18). */
  printPage: NamedNode<"https://schema.org/printPage">;
  /** If this NewsArticle appears in print, this field indicates the print section in which the article appeared. */
  printSection: NamedNode<"https://schema.org/printSection">;
  /** A description of the procedure involved in setting up, using, and/or installing the device. */
  procedure: NamedNode<"https://schema.org/procedure">;
  /** The type of procedure, for example Surgical, Noninvasive, or Percutaneous. */
  procedureType: NamedNode<"https://schema.org/procedureType">;
  /** Estimated processing time for the service using this channel. */
  processingTime: NamedNode<"https://schema.org/processingTime">;
  /** Processor architecture required to run the application (e.g. IA64). */
  processorRequirements: NamedNode<"https://schema.org/processorRequirements">;
  /** The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.). */
  producer: NamedNode<"https://schema.org/producer">;
  /** The tangible thing generated by the service, e.g. a passport, permit, etc. */
  produces: NamedNode<"https://schema.org/produces">;
  /** The tangible thing generated by the service, e.g. a passport, permit, etc. */
  serviceOutput: NamedNode<"https://schema.org/serviceOutput">;
  /** Indicates a textual identifier for a ProductGroup. */
  productGroupID: NamedNode<"https://schema.org/productGroupID">;
  /** The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```. */
  productID: NamedNode<"https://schema.org/productID">;
  /** The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). */
  productSupported: NamedNode<"https://schema.org/productSupported">;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: NamedNode<"https://schema.org/productionCompany">;
  /** The date of production of the item, e.g. vehicle. */
  productionDate: NamedNode<"https://schema.org/productionDate">;
  /** Proficiency needed for this content; expected values: 'Beginner', 'Expert'. */
  proficiencyLevel: NamedNode<"https://schema.org/proficiencyLevel">;
  /** Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. */
  programMembershipUsed: NamedNode<"https://schema.org/programMembershipUsed">;
  /** The program providing the membership. */
  programName: NamedNode<"https://schema.org/programName">;
  /** Prerequisites for enrolling in the program. */
  programPrerequisites: NamedNode<"https://schema.org/programPrerequisites">;
  /** The type of educational or occupational program. For example, classroom, internship, alternance, etc. */
  programType: NamedNode<"https://schema.org/programType">;
  /** The computer programming language. */
  programmingLanguage: NamedNode<"https://schema.org/programmingLanguage">;
  /** Indicates whether API is managed or unmanaged. */
  programmingModel: NamedNode<"https://schema.org/programmingModel">;
  /**
   * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
   * (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific ID of the property), or (3)
   * a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
   * Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
   */
  propertyID: NamedNode<"https://schema.org/propertyID">;
  /** Proprietary name given to the diet plan, typically by its originator or creator. */
  proprietaryName: NamedNode<"https://schema.org/proprietaryName">;
  /** The number of grams of protein. */
  proteinContent: NamedNode<"https://schema.org/proteinContent">;
  /** Indicates the mobility of a provided service (e.g. 'static', 'dynamic'). */
  providerMobility: NamedNode<"https://schema.org/providerMobility">;
  /** The service provided by this channel. */
  providesService: NamedNode<"https://schema.org/providesService">;
  /** A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value */
  publicAccess: NamedNode<"https://schema.org/publicAccess">;
  /** Information about public transport closures. */
  publicTransportClosuresInfo: NamedNode<
    "http://schema.org/publicTransportClosuresInfo"
  >;
  /** A publication event associated with the item. */
  publication: NamedNode<"https://schema.org/publication">;
  /** The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html). */
  publicationType: NamedNode<"https://schema.org/publicationType">;
  /** An agent associated with the publication event. */
  publishedBy: NamedNode<"https://schema.org/publishedBy">;
  /** A broadcast service associated with the publication event. */
  publishedOn: NamedNode<"https://schema.org/publishedOn">;
  /** The publisher of the creative work. */
  publisher: NamedNode<"https://schema.org/publisher">;
  /** The publishing division which published the comic. */
  publisherImprint: NamedNode<"https://schema.org/publisherImprint">;
  /** The date the item, e.g. vehicle, was purchased by the current owner. */
  purchaseDate: NamedNode<"https://schema.org/purchaseDate">;
  /** Specific qualifications required for this role or Occupation. */
  qualifications: NamedNode<"https://schema.org/qualifications">;
  /** Guidelines about quarantine rules, e.g. in the context of a pandemic. */
  quarantineGuidelines: NamedNode<"https://schema.org/quarantineGuidelines">;
  /** A sub property of instrument. The query used on this action. */
  query: NamedNode<"https://schema.org/query">;
  /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
  quest: NamedNode<"https://schema.org/quest">;
  /** A sub property of object. A question. */
  question: NamedNode<"https://schema.org/question">;
  /** The count of total number of ratings. */
  ratingCount: NamedNode<"https://schema.org/ratingCount">;
  /** A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]]. */
  ratingExplanation: NamedNode<"https://schema.org/ratingExplanation">;
  /** The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  ratingValue: NamedNode<"https://schema.org/ratingValue">;
  /** A person who reads (performs) the audiobook. */
  readBy: NamedNode<"https://schema.org/readBy">;
  /** Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. */
  readonlyValue: NamedNode<"https://schema.org/readonlyValue">;
  /** A sub property of participant. The real estate agent involved in the action. */
  realEstateAgent: NamedNode<"https://schema.org/realEstateAgent">;
  /** A sub property of instrument. The recipe/instructions used to perform the action. */
  recipe: NamedNode<"https://schema.org/recipe">;
  /** The category of the recipe—for example, appetizer, entree, etc. */
  recipeCategory: NamedNode<"https://schema.org/recipeCategory">;
  /** The cuisine of the recipe (for example, French or Ethiopian). */
  recipeCuisine: NamedNode<"https://schema.org/recipeCuisine">;
  /** A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items. */
  recipeInstructions: NamedNode<"https://schema.org/recipeInstructions">;
  /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection. */
  step: NamedNode<"https://schema.org/step">;
  /** The quantity produced by the recipe (for example, number of people served, number of servings, etc). */
  recipeYield: NamedNode<"https://schema.org/recipeYield">;
  /** The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles. */
  yield: NamedNode<"https://schema.org/yield">;
  /** An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation. */
  recognizedBy: NamedNode<"https://schema.org/recognizedBy">;
  /** If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. */
  recognizingAuthority: NamedNode<"https://schema.org/recognizingAuthority">;
  /** Strength of the guideline's recommendation (e.g. 'class I'). */
  recommendationStrength: NamedNode<
    "https://schema.org/recommendationStrength"
  >;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  recommendedIntake: NamedNode<"https://schema.org/recommendedIntake">;
  /** The label that issued the release. */
  recordLabel: NamedNode<"https://schema.org/recordLabel">;
  /** An audio recording of the work. */
  recordedAs: NamedNode<"https://schema.org/recordedAs">;
  /** The composition this track is a recording of. */
  recordingOf: NamedNode<"https://schema.org/recordingOf">;
  /** The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. */
  recordedAt: NamedNode<"https://schema.org/recordedAt">;
  /** The CreativeWork that captured all or part of this Event. */
  recordedIn: NamedNode<"https://schema.org/recordedIn">;
  /** The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money. */
  recourseLoan: NamedNode<"https://schema.org/recourseLoan">;
  /** The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit. */
  referenceQuantity: NamedNode<"https://schema.org/referenceQuantity">;
  /** The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. */
  referencesOrder: NamedNode<"https://schema.org/referencesOrder">;
  /** A refund type, from an enumerated list. */
  refundType: NamedNode<"https://schema.org/refundType">;
  /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
  regionDrained: NamedNode<"https://schema.org/regionDrained">;
  /** The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166). */
  regionsAllowed: NamedNode<"https://schema.org/regionsAllowed">;
  /** Anatomical systems or structures that relate to the superficial anatomy. */
  relatedAnatomy: NamedNode<"https://schema.org/relatedAnatomy">;
  /** A medical condition associated with this anatomy. */
  relatedCondition: NamedNode<"https://schema.org/relatedCondition">;
  /** Any other drug related to this one, for example commonly-prescribed alternatives. */
  relatedDrug: NamedNode<"https://schema.org/relatedDrug">;
  /** A link related to this web page, for example to other related web pages. */
  relatedLink: NamedNode<"https://schema.org/relatedLink">;
  /** Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. */
  relatedStructure: NamedNode<"https://schema.org/relatedStructure">;
  /** A medical therapy related to this anatomy. */
  relatedTherapy: NamedNode<"https://schema.org/relatedTherapy">;
  /** The most generic familial relation. */
  relatedTo: NamedNode<"https://schema.org/relatedTo">;
  /** The release date of a product or product model. This can be used to distinguish the exact variant of a product. */
  releaseDate: NamedNode<"https://schema.org/releaseDate">;
  /** Description of what changed in this version. */
  releaseNotes: NamedNode<"https://schema.org/releaseNotes">;
  /** The place and time the release was issued, expressed as a PublicationEvent. */
  releasedEvent: NamedNode<"https://schema.org/releasedEvent">;
  /** The Occupation for the JobPosting. */
  relevantOccupation: NamedNode<"https://schema.org/relevantOccupation">;
  /** If applicable, a medical specialty in which this entity is relevant. */
  relevantSpecialty: NamedNode<"https://schema.org/relevantSpecialty">;
  /** The number of attendee places for an event that remain unallocated. */
  remainingAttendeeCapacity: NamedNode<
    "http://schema.org/remainingAttendeeCapacity"
  >;
  /** Whether the terms for payment of interest can be renegotiated during the life of the loan. */
  renegotiableLoan: NamedNode<"https://schema.org/renegotiableLoan">;
  /** Defines the number of times a recurring [[Event]] will take place. */
  repeatCount: NamedNode<"https://schema.org/repeatCount">;
  /**
   * Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between
   *       events should be defined as a [[Duration]] of time.
   */
  repeatFrequency: NamedNode<"https://schema.org/repeatFrequency">;
  /** Number of times one should repeat the activity. */
  repetitions: NamedNode<"https://schema.org/repetitions">;
  /** A sub property of object. The object that is being replaced. */
  replacee: NamedNode<"https://schema.org/replacee">;
  /** A sub property of object. The object that replaces. */
  replacer: NamedNode<"https://schema.org/replacer">;
  /** The URL at which a reply may be posted to the specified UserComment. */
  replyToUrl: NamedNode<"https://schema.org/replyToUrl">;
  /** The number or other unique designator assigned to a Report by the publishing organization. */
  reportNumber: NamedNode<"https://schema.org/reportNumber">;
  /** Indicates whether this image is representative of the content of the page. */
  representativeOfPage: NamedNode<"https://schema.org/representativeOfPage">;
  /** Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.) */
  requiredCollateral: NamedNode<"https://schema.org/requiredCollateral">;
  /** Audiences defined by a person's gender. */
  requiredGender: NamedNode<"https://schema.org/requiredGender">;
  /** Audiences defined by a person's maximum age. */
  requiredMaxAge: NamedNode<"https://schema.org/requiredMaxAge">;
  /** Audiences defined by a person's minimum age. */
  requiredMinAge: NamedNode<"https://schema.org/requiredMinAge">;
  /** The required quantity of the item(s). */
  requiredQuantity: NamedNode<"https://schema.org/requiredQuantity">;
  /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime). */
  requirements: NamedNode<"https://schema.org/requirements">;
  /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime). */
  softwareRequirements: NamedNode<"https://schema.org/softwareRequirements">;
  /** Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no'). */
  requiresSubscription: NamedNode<"https://schema.org/requiresSubscription">;
  /** The thing -- flight, event, restaurant, etc. being reserved. */
  reservationFor: NamedNode<"https://schema.org/reservationFor">;
  /** A unique identifier for the reservation. */
  reservationId: NamedNode<"https://schema.org/reservationId">;
  /** The current status of the reservation. */
  reservationStatus: NamedNode<"https://schema.org/reservationStatus">;
  /** A ticket associated with the reservation. */
  reservedTicket: NamedNode<"https://schema.org/reservedTicket">;
  /** Responsibilities associated with this role or Occupation. */
  responsibilities: NamedNode<"https://schema.org/responsibilities">;
  /** How often one should break from the activity. */
  restPeriods: NamedNode<"https://schema.org/restPeriods">;
  /** Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer. */
  restockingFee: NamedNode<"https://schema.org/restockingFee">;
  /** The result produced in the action. E.g. John wrote *a book*. */
  result: NamedNode<"https://schema.org/result">;
  /** A sub property of result. The Comment created or sent as a result of this action. */
  resultComment: NamedNode<"https://schema.org/resultComment">;
  /** A sub property of result. The review that resulted in the performing of the action. */
  resultReview: NamedNode<"https://schema.org/resultReview">;
  /** The type of return fees for purchased products (for any return reason). */
  returnFees: NamedNode<"https://schema.org/returnFees">;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason. */
  returnLabelSource: NamedNode<"https://schema.org/returnLabelSource">;
  /** The type of return method offered, specified from an enumeration. */
  returnMethod: NamedNode<"https://schema.org/returnMethod">;
  /** Specifies an applicable return policy (from an enumeration). */
  returnPolicyCategory: NamedNode<"https://schema.org/returnPolicyCategory">;
  /** The country where the product has to be sent to for returns, for example "Ireland" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to. */
  returnPolicyCountry: NamedNode<"https://schema.org/returnPolicyCountry">;
  /** Seasonal override of a return policy. */
  returnPolicySeasonalOverride: NamedNode<
    "http://schema.org/returnPolicySeasonalOverride"
  >;
  /** Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]]. */
  returnShippingFeesAmount: NamedNode<
    "http://schema.org/returnShippingFeesAmount"
  >;
  /** A review of the item. */
  review: NamedNode<"https://schema.org/review">;
  /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
  reviewAspect: NamedNode<"https://schema.org/reviewAspect">;
  /** The actual body of the review. */
  reviewBody: NamedNode<"https://schema.org/reviewBody">;
  /** The count of total number of reviews. */
  reviewCount: NamedNode<"https://schema.org/reviewCount">;
  /** The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work. */
  reviewRating: NamedNode<"https://schema.org/reviewRating">;
  /** People or organizations that have reviewed the content on this web page for accuracy and/or completeness. */
  reviewedBy: NamedNode<"https://schema.org/reviewedBy">;
  /** Review of the item. */
  reviews: NamedNode<"https://schema.org/reviews">;
  /** A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition. */
  riskFactor: NamedNode<"https://schema.org/riskFactor">;
  /** Specific physiologic risks associated to the diet plan. */
  risks: NamedNode<"https://schema.org/risks">;
  /** The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
  roofLoad: NamedNode<"https://schema.org/roofLoad">;
  /** The response (yes, no, maybe) to the RSVP. */
  rsvpResponse: NamedNode<"https://schema.org/rsvpResponse">;
  /** The vasculature the lymphatic structure runs, or efferents, to. */
  runsTo: NamedNode<"https://schema.org/runsTo">;
  /** Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0). */
  runtime: NamedNode<"https://schema.org/runtime">;
  /** Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0). */
  runtimePlatform: NamedNode<"https://schema.org/runtimePlatform">;
  /** The RxCUI drug identifier from RXNORM. */
  rxcui: NamedNode<"https://schema.org/rxcui">;
  /** Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. */
  safetyConsideration: NamedNode<"https://schema.org/safetyConsideration">;
  /** The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee. */
  salaryCurrency: NamedNode<"https://schema.org/salaryCurrency">;
  /** The expected salary upon completing the training. */
  salaryUponCompletion: NamedNode<"https://schema.org/salaryUponCompletion">;
  /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
  sampleType: NamedNode<"https://schema.org/sampleType">;
  /** The number of grams of saturated fat. */
  saturatedFatContent: NamedNode<"https://schema.org/saturatedFatContent">;
  /** Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database. */
  scheduleTimezone: NamedNode<"https://schema.org/scheduleTimezone">;
  /** The date the invoice is scheduled to be paid. */
  scheduledPaymentDate: NamedNode<"https://schema.org/scheduledPaymentDate">;
  /** The time the object is scheduled to. */
  scheduledTime: NamedNode<"https://schema.org/scheduledTime">;
  /**
   * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
   *     indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```http://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
   */
  schemaVersion: NamedNode<"https://schema.org/schemaVersion">;
  /** Information about school closures. */
  schoolClosuresInfo: NamedNode<"https://schema.org/schoolClosuresInfo">;
  /** The number of screens in the movie theater. */
  screenCount: NamedNode<"https://schema.org/screenCount">;
  /** A link to a screenshot image of the app. */
  screenshot: NamedNode<"https://schema.org/screenshot">;
  /** Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]] */
  sdDatePublished: NamedNode<"https://schema.org/sdDatePublished">;
  /** A license document that applies to this structured data, typically indicated by URL. */
  sdLicense: NamedNode<"https://schema.org/sdLicense">;
  /**
   * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
   * [[sdPublisher]] property helps make such practices more explicit.
   */
  sdPublisher: NamedNode<"https://schema.org/sdPublisher">;
  /** A season in a media series. */
  season: NamedNode<"https://schema.org/season">;
  /** Position of the season within an ordered group of seasons. */
  seasonNumber: NamedNode<"https://schema.org/seasonNumber">;
  /** A season in a media series. */
  seasons: NamedNode<"https://schema.org/seasons">;
  /** The location of the reserved seat (e.g., 27). */
  seatNumber: NamedNode<"https://schema.org/seatNumber">;
  /** The row location of the reserved seat (e.g., B). */
  seatRow: NamedNode<"https://schema.org/seatRow">;
  /** The section location of the reserved seat (e.g. Orchestra). */
  seatSection: NamedNode<"https://schema.org/seatSection">;
  /** The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons */
  seatingCapacity: NamedNode<"https://schema.org/seatingCapacity">;
  /** The type/class of the seat. */
  seatingType: NamedNode<"https://schema.org/seatingType">;
  /** A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition. */
  secondaryPrevention: NamedNode<"https://schema.org/secondaryPrevention">;
  /** A description of any security clearance requirements of the job. */
  securityClearanceRequirement: NamedNode<
    "http://schema.org/securityClearanceRequirement"
  >;
  /** The type of security screening the passenger is subject to. */
  securityScreening: NamedNode<"https://schema.org/securityScreening">;
  /** A pointer to products or services sought by the organization or person (demand). */
  seeks: NamedNode<"https://schema.org/seeks">;
  /** A sub property of participant. The participant who is at the sending end of the action. */
  sender: NamedNode<"https://schema.org/sender">;
  /** A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
  sensoryRequirement: NamedNode<"https://schema.org/sensoryRequirement">;
  /** The neurological pathway extension that inputs and sends information to the brain or spinal cord. */
  sensoryUnit: NamedNode<"https://schema.org/sensoryUnit">;
  /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
  serialNumber: NamedNode<"https://schema.org/serialNumber">;
  /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
  seriousAdverseOutcome: NamedNode<"https://schema.org/seriousAdverseOutcome">;
  /** Status of a game server. */
  serverStatus: NamedNode<"https://schema.org/serverStatus">;
  /** The cuisine of the restaurant. */
  servesCuisine: NamedNode<"https://schema.org/servesCuisine">;
  /** The audience eligible for this service. */
  serviceAudience: NamedNode<"https://schema.org/serviceAudience">;
  /** The location (e.g. civic structure, local business, etc.) where a person can go to access the service. */
  serviceLocation: NamedNode<"https://schema.org/serviceLocation">;
  /** The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor. */
  serviceOperator: NamedNode<"https://schema.org/serviceOperator">;
  /** The phone number to use to access the service. */
  servicePhone: NamedNode<"https://schema.org/servicePhone">;
  /** The address for accessing the service by mail. */
  servicePostalAddress: NamedNode<"https://schema.org/servicePostalAddress">;
  /** The number to access the service by text message. */
  serviceSmsNumber: NamedNode<"https://schema.org/serviceSmsNumber">;
  /** The type of service being offered, e.g. veterans' benefits, emergency relief, etc. */
  serviceType: NamedNode<"https://schema.org/serviceType">;
  /** The website to access the service. */
  serviceUrl: NamedNode<"https://schema.org/serviceUrl">;
  /** The serving size, in terms of the number of volume or mass. */
  servingSize: NamedNode<"https://schema.org/servingSize">;
  /** The [SHA-2](https://en.wikipedia.org/wiki/SHA-2) SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' */
  sha256: NamedNode<"https://schema.org/sha256">;
  /** A CreativeWork such as an image, video, or audio clip shared as part of this posting. */
  sharedContent: NamedNode<"https://schema.org/sharedContent">;
  /** indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges. */
  shippingDestination: NamedNode<"https://schema.org/shippingDestination">;
  /** Indicates information about the shipping policies and options associated with an [[Offer]]. */
  shippingDetails: NamedNode<"https://schema.org/shippingDetails">;
  /** Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  shippingLabel: NamedNode<"https://schema.org/shippingLabel">;
  /** Indicates the origin of a shipment, i.e. where it should be coming from. */
  shippingOrigin: NamedNode<"https://schema.org/shippingOrigin">;
  /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate. */
  shippingRate: NamedNode<"https://schema.org/shippingRate">;
  /** Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details. */
  shippingSettingsLink: NamedNode<"https://schema.org/shippingSettingsLink">;
  /** A sibling of the person. */
  sibling: NamedNode<"https://schema.org/sibling">;
  /** A sibling of the person. */
  siblings: NamedNode<"https://schema.org/siblings">;
  /** A sign detected by the test. */
  signDetected: NamedNode<"https://schema.org/signDetected">;
  /** A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition. */
  signOrSymptom: NamedNode<"https://schema.org/signOrSymptom">;
  /** The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment. */
  significance: NamedNode<"https://schema.org/significance">;
  /** One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
  significantLink: NamedNode<"https://schema.org/significantLink">;
  /** The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
  significantLinks: NamedNode<"https://schema.org/significantLinks">;
  /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. */
  size: NamedNode<"https://schema.org/size">;
  /** The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular" */
  sizeGroup: NamedNode<"https://schema.org/sizeGroup">;
  /** The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial"). */
  sizeSystem: NamedNode<"https://schema.org/sizeSystem">;
  /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
  skills: NamedNode<"https://schema.org/skills">;
  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
  sku: NamedNode<"https://schema.org/sku">;
  /** A slogan or motto associated with the item. */
  slogan: NamedNode<"https://schema.org/slogan">;
  /** A specification in form of a line notation for describing the structure of chemical species using short ASCII strings.  Double bond stereochemistry \ indicators may need to be escaped in the string in formats where the backslash is an escape character. */
  smiles: NamedNode<"https://schema.org/smiles">;
  /** Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room. */
  smokingAllowed: NamedNode<"https://schema.org/smokingAllowed">;
  /** The number of milligrams of sodium. */
  sodiumContent: NamedNode<"https://schema.org/sodiumContent">;
  /** Additional content for a software application. */
  softwareAddOn: NamedNode<"https://schema.org/softwareAddOn">;
  /** Software application help. */
  softwareHelp: NamedNode<"https://schema.org/softwareHelp">;
  /** Version of the software instance. */
  softwareVersion: NamedNode<"https://schema.org/softwareVersion">;
  /** The Organization on whose behalf the creator was working. */
  sourceOrganization: NamedNode<"https://schema.org/sourceOrganization">;
  /** The neurological pathway that originates the neurons. */
  sourcedFrom: NamedNode<"https://schema.org/sourcedFrom">;
  /**
   * The "spatial" property can be used in cases when more specific properties
   * (e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
   */
  spatial: NamedNode<"https://schema.org/spatial">;
  /**
   * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
   *
   * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
   *
   * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
   *
   * 2.) CSS Selectors - addresses content in the annotated page, e.g. via class attribute. Use the [[cssSelector]] property.
   *
   * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
   *
   *
   * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
   * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
   *
   */
  speakable: NamedNode<"https://schema.org/speakable">;
  /** Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc. */
  specialCommitments: NamedNode<"https://schema.org/specialCommitments">;
  /**
   * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
   *
   */
  specialOpeningHoursSpecification: NamedNode<
    "http://schema.org/specialOpeningHoursSpecification"
  >;
  /** One of the domain specialities to which this web page's content applies. */
  specialty: NamedNode<"https://schema.org/specialty">;
  /** Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898). */
  speechToTextMarkup: NamedNode<"https://schema.org/speechToTextMarkup">;
  /** The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]]) should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property. */
  speed: NamedNode<"https://schema.org/speed">;
  /** The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork. */
  spokenByCharacter: NamedNode<"https://schema.org/spokenByCharacter">;
  /** A type of sport (e.g. Baseball). */
  sport: NamedNode<"https://schema.org/sport">;
  /** A sub property of location. The sports activity location where this action occurred. */
  sportsActivityLocation: NamedNode<
    "https://schema.org/sportsActivityLocation"
  >;
  /** A sub property of location. The sports event where this action occurred. */
  sportsEvent: NamedNode<"https://schema.org/sportsEvent">;
  /** A sub property of participant. The sports team that participated on this action. */
  sportsTeam: NamedNode<"https://schema.org/sportsTeam">;
  /** The person's spouse. */
  spouse: NamedNode<"https://schema.org/spouse">;
  /** The stage of the condition, if applicable. */
  stage: NamedNode<"https://schema.org/stage">;
  /** The stage represented as a number, e.g. 3. */
  stageAsNumber: NamedNode<"https://schema.org/stageAsNumber">;
  /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
  starRating: NamedNode<"https://schema.org/starRating">;
  /** The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  startDate: NamedNode<"https://schema.org/startDate">;
  /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
  startOffset: NamedNode<"https://schema.org/startOffset">;
  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  startTime: NamedNode<"https://schema.org/startTime">;
  /** The status of the study (enumerated). */
  status: NamedNode<"https://schema.org/status">;
  /** The position of the steering wheel or similar device (mostly for cars). */
  steeringPosition: NamedNode<"https://schema.org/steeringPosition">;
  /** The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. */
  stepValue: NamedNode<"https://schema.org/stepValue">;
  /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred). */
  steps: NamedNode<"https://schema.org/steps">;
  /** Storage requirements (free space required). */
  storageRequirements: NamedNode<"https://schema.org/storageRequirements">;
  /** The street address. For example, 1600 Amphitheatre Pkwy. */
  streetAddress: NamedNode<"https://schema.org/streetAddress">;
  /** The units of an active ingredient's strength, e.g. mg. */
  strengthUnit: NamedNode<"https://schema.org/strengthUnit">;
  /** The value of an active ingredient's strength, e.g. 325. */
  strengthValue: NamedNode<"https://schema.org/strengthValue">;
  /** The name given to how bone physically connects to each other. */
  structuralClass: NamedNode<"https://schema.org/structuralClass">;
  /** A medical study or trial related to this entity. */
  study: NamedNode<"https://schema.org/study">;
  /** Specifics about the observational study design (enumerated). */
  studyDesign: NamedNode<"https://schema.org/studyDesign">;
  /** The location in which the study is taking/took place. */
  studyLocation: NamedNode<"https://schema.org/studyLocation">;
  /** A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. */
  studySubject: NamedNode<"https://schema.org/studySubject">;
  /** An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. */
  subEvent: NamedNode<"https://schema.org/subEvent">;
  /** An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. */
  superEvent: NamedNode<"https://schema.org/superEvent">;
  /** Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference. */
  subEvents: NamedNode<"https://schema.org/subEvents">;
  /** The individual reservations included in the package. Typically a repeated property. */
  subReservation: NamedNode<"https://schema.org/subReservation">;
  /** The substage, e.g. 'a' for Stage IIIa. */
  subStageSuffix: NamedNode<"https://schema.org/subStageSuffix">;
  /** Component (sub-)structure(s) that comprise this anatomical structure. */
  subStructure: NamedNode<"https://schema.org/subStructure">;
  /** A component test of the panel. */
  subTest: NamedNode<"https://schema.org/subTest">;
  /** Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47). */
  subtitleLanguage: NamedNode<"https://schema.org/subtitleLanguage">;
  /** A pointer from a newer variant of a product  to its previous, often discontinued predecessor. */
  successorOf: NamedNode<"https://schema.org/successorOf">;
  /** The number of grams of sugar. */
  sugarContent: NamedNode<"https://schema.org/sugarContent">;
  /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
  suggestedAge: NamedNode<"https://schema.org/suggestedAge">;
  /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
  suggestedGender: NamedNode<"https://schema.org/suggestedGender">;
  /** Maximum recommended age in years for the audience or user. */
  suggestedMaxAge: NamedNode<"https://schema.org/suggestedMaxAge">;
  /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
  suggestedMeasurement: NamedNode<"https://schema.org/suggestedMeasurement">;
  /** Minimum recommended age in years for the audience or user. */
  suggestedMinAge: NamedNode<"https://schema.org/suggestedMinAge">;
  /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
  suitableForDiet: NamedNode<"https://schema.org/suitableForDiet">;
  /** The area to which the artery supplies blood. */
  supplyTo: NamedNode<"https://schema.org/supplyTo">;
  /** Supporting data for a SoftwareApplication. */
  supportingData: NamedNode<"https://schema.org/supportingData">;
  /** A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc. */
  surface: NamedNode<"https://schema.org/surface">;
  /** Indicates a target EntryPoint, or url, for an Action. */
  target: NamedNode<"https://schema.org/target">;
  /** The description of a node in an established educational framework. */
  targetDescription: NamedNode<"https://schema.org/targetDescription">;
  /** The name of a node in an established educational framework. */
  targetName: NamedNode<"https://schema.org/targetName">;
  /** Type of app development: phone, Metro style, desktop, XBox, etc. */
  targetPlatform: NamedNode<"https://schema.org/targetPlatform">;
  /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
  targetPopulation: NamedNode<"https://schema.org/targetPopulation">;
  /** Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used. */
  targetProduct: NamedNode<"https://schema.org/targetProduct">;
  /** The URL of a node in an established educational framework. */
  targetUrl: NamedNode<"https://schema.org/targetUrl">;
  /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
  taxID: NamedNode<"https://schema.org/taxID">;
  /** The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs. */
  taxonRank: NamedNode<"https://schema.org/taxonRank">;
  /** The taxonomic grouping of the organism that expresses, encodes, or in some way related to the BioChemEntity. */
  taxonomicRange: NamedNode<"https://schema.org/taxonomicRange">;
  /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches: NamedNode<"https://schema.org/teaches">;
  /** The telephone number. */
  telephone: NamedNode<"https://schema.org/telephone">;
  /**
   * The "temporal" property can be used in cases where more specific properties
   * (e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
   */
  temporal: NamedNode<"https://schema.org/temporal">;
  /** The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term. */
  termDuration: NamedNode<"https://schema.org/termDuration">;
  /** Human-readable terms of service documentation. */
  termsOfService: NamedNode<"https://schema.org/termsOfService">;
  /** The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2. */
  termsPerYear: NamedNode<"https://schema.org/termsPerYear">;
  /** The textual content of this CreativeWork. */
  text: NamedNode<"https://schema.org/text">;
  /** Text value being annotated. */
  textValue: NamedNode<"https://schema.org/textValue">;
  /** Thumbnail image for an image or video. */
  thumbnail: NamedNode<"https://schema.org/thumbnail">;
  /** A thumbnail image relevant to the Thing. */
  thumbnailUrl: NamedNode<"https://schema.org/thumbnailUrl">;
  /** The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO 15022. */
  tickerSymbol: NamedNode<"https://schema.org/tickerSymbol">;
  /** The unique identifier for the ticket. */
  ticketNumber: NamedNode<"https://schema.org/ticketNumber">;
  /** Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance. */
  ticketToken: NamedNode<"https://schema.org/ticketToken">;
  /** The seat associated with the ticket. */
  ticketedSeat: NamedNode<"https://schema.org/ticketedSeat">;
  /** The time of day the program normally runs. For example, "evenings". */
  timeOfDay: NamedNode<"https://schema.org/timeOfDay">;
  /** Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'. */
  timeRequired: NamedNode<"https://schema.org/timeRequired">;
  /** The expected length of time to complete the program if attending full-time. */
  timeToComplete: NamedNode<"https://schema.org/timeToComplete">;
  /** The type of tissue sample required for the test. */
  tissueSample: NamedNode<"https://schema.org/tissueSample">;
  /** The title of the job. */
  title: NamedNode<"https://schema.org/title">;
  /**
   * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].
   *
   * Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
   *
   */
  titleEIDR: NamedNode<"https://schema.org/titleEIDR">;
  /** A sub property of location. The final location of the object or the agent after the action. */
  toLocation: NamedNode<"https://schema.org/toLocation">;
  /** A sub property of recipient. The recipient who was directly sent the message. */
  toRecipient: NamedNode<"https://schema.org/toRecipient">;
  /** A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render. */
  tocContinuation: NamedNode<"https://schema.org/tocContinuation">;
  /** Indicates a [[HyperTocEntry]] in a [[HyperToc]]. */
  tocEntry: NamedNode<"https://schema.org/tocEntry">;
  /** The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR).\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
  tongueWeight: NamedNode<"https://schema.org/tongueWeight">;
  /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
  tool: NamedNode<"https://schema.org/tool">;
  /** The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges. */
  torque: NamedNode<"https://schema.org/torque">;
  /** The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known. */
  totalJobOpenings: NamedNode<"https://schema.org/totalJobOpenings">;
  /** The total amount due. */
  totalPaymentDue: NamedNode<"https://schema.org/totalPaymentDue">;
  /** The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  totalPrice: NamedNode<"https://schema.org/totalPrice">;
  /** The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  totalTime: NamedNode<"https://schema.org/totalTime">;
  /** A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate. */
  tourBookingPage: NamedNode<"https://schema.org/tourBookingPage">;
  /** Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc. */
  touristType: NamedNode<"https://schema.org/touristType">;
  /** A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
  track: NamedNode<"https://schema.org/track">;
  /** Shipper tracking number. */
  trackingNumber: NamedNode<"https://schema.org/trackingNumber">;
  /** Tracking url for the parcel delivery. */
  trackingUrl: NamedNode<"https://schema.org/trackingUrl">;
  /** A music recording (track)&#x2014;usually a single song. */
  tracks: NamedNode<"https://schema.org/tracks">;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: NamedNode<"https://schema.org/trailer">;
  /** The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
  trailerWeight: NamedNode<"https://schema.org/trailerWeight">;
  /** The name of the train (e.g. The Orient Express). */
  trainName: NamedNode<"https://schema.org/trainName">;
  /** The unique identifier for the train. */
  trainNumber: NamedNode<"https://schema.org/trainNumber">;
  /** The estimated salary earned while in the program. */
  trainingSalary: NamedNode<"https://schema.org/trainingSalary">;
  /** The number of grams of trans fat. */
  transFatContent: NamedNode<"https://schema.org/transFatContent">;
  /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
  transcript: NamedNode<"https://schema.org/transcript">;
  /** The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY). */
  transitTime: NamedNode<"https://schema.org/transitTime">;
  /** Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  transitTimeLabel: NamedNode<"https://schema.org/transitTimeLabel">;
  /** The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”. */
  translationOfWork: NamedNode<"https://schema.org/translationOfWork">;
  /** A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo. */
  workTranslation: NamedNode<"https://schema.org/workTranslation">;
  /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
  translator: NamedNode<"https://schema.org/translator">;
  /** How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc. */
  transmissionMethod: NamedNode<"https://schema.org/transmissionMethod">;
  /** Information about travel bans, e.g. in the context of a pandemic. */
  travelBans: NamedNode<"https://schema.org/travelBans">;
  /** Specifics about the trial design (enumerated). */
  trialDesign: NamedNode<"https://schema.org/trialDesign">;
  /** The anatomical or organ system that the vein flows into; a larger structure that the vein connects to. */
  tributary: NamedNode<"https://schema.org/tributary">;
  /** The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity. */
  typeOfBed: NamedNode<"https://schema.org/typeOfBed">;
  /** The product that this structured value is referring to. */
  typeOfGood: NamedNode<"https://schema.org/typeOfGood">;
  /** The typical expected age range, e.g. '7-9', '11-'. */
  typicalAgeRange: NamedNode<"https://schema.org/typicalAgeRange">;
  /** The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution. */
  typicalCreditsPerTerm: NamedNode<"https://schema.org/typicalCreditsPerTerm">;
  /** A medical test typically performed given this condition. */
  typicalTest: NamedNode<"https://schema.org/typicalTest">;
  /** The person or organization the reservation or ticket is for. */
  underName: NamedNode<"https://schema.org/underName">;
  /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
  unitCode: NamedNode<"https://schema.org/unitCode">;
  /**
   * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
   * <a href='unitCode'>unitCode</a>.
   */
  unitText: NamedNode<"https://schema.org/unitText">;
  /** For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required. */
  unnamedSourcesPolicy: NamedNode<"https://schema.org/unnamedSourcesPolicy">;
  /** The number of grams of unsaturated fat. */
  unsaturatedFatContent: NamedNode<"https://schema.org/unsaturatedFatContent">;
  /** Date when this media object was uploaded to this site. */
  uploadDate: NamedNode<"https://schema.org/uploadDate">;
  /** The number of upvotes this question, answer or comment has received from the community. */
  upvoteCount: NamedNode<"https://schema.org/upvoteCount">;
  /** URL of the item. */
  url: NamedNode<"https://schema.org/url">;
  /** An url template (RFC6570) that will be used to construct the target of the execution of the action. */
  urlTemplate: NamedNode<"https://schema.org/urlTemplate">;
  /** A condition the test is used to diagnose. */
  usedToDiagnose: NamedNode<"https://schema.org/usedToDiagnose">;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. */
  userInteractionCount: NamedNode<"https://schema.org/userInteractionCount">;
  /** Device used to perform the test. */
  usesDevice: NamedNode<"https://schema.org/usesDevice">;
  /** The standard for interpreting the Plan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details. */
  usesHealthPlanIdStandard: NamedNode<
    "http://schema.org/usesHealthPlanIdStandard"
  >;
  /** Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]]. */
  utterances: NamedNode<"https://schema.org/utterances">;
  /** The duration of validity of a permit or similar thing. */
  validFor: NamedNode<"https://schema.org/validFor">;
  /** The date when the item becomes valid. */
  validFrom: NamedNode<"https://schema.org/validFrom">;
  /** The geographic area where a permit or similar thing is valid. */
  validIn: NamedNode<"https://schema.org/validIn">;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: NamedNode<"https://schema.org/validThrough">;
  /** The date when the item is no longer valid. */
  validUntil: NamedNode<"https://schema.org/validUntil">;
  /** The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  value: NamedNode<"https://schema.org/value">;
  /** Specifies whether the applicable value-added tax (VAT) is included in the price specification or not. */
  valueAddedTaxIncluded: NamedNode<"https://schema.org/valueAddedTaxIncluded">;
  /** Specifies the allowed range for number of characters in a literal value. */
  valueMaxLength: NamedNode<"https://schema.org/valueMaxLength">;
  /** Specifies the minimum allowed range for number of characters in a literal value. */
  valueMinLength: NamedNode<"https://schema.org/valueMinLength">;
  /** Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. */
  valueName: NamedNode<"https://schema.org/valueName">;
  /** Specifies a regular expression for testing literal values according to the HTML spec. */
  valuePattern: NamedNode<"https://schema.org/valuePattern">;
  /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
  valueReference: NamedNode<"https://schema.org/valueReference">;
  /** Whether the property must be filled in to complete the action.  Default is false. */
  valueRequired: NamedNode<"https://schema.org/valueRequired">;
  /** The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. */
  variableMeasured: NamedNode<"https://schema.org/variableMeasured">;
  /**
   * A description of the variant cover
   *     	for the issue, if the issue is a variant printing. For example, "Bryan Hitch
   *     	Variant Cover" or "2nd Printing Variant".
   */
  variantCover: NamedNode<"https://schema.org/variantCover">;
  /** Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs. */
  variesBy: NamedNode<"https://schema.org/variesBy">;
  /** The Value-added Tax ID of the organization or person. */
  vatID: NamedNode<"https://schema.org/vatID">;
  /** A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'. */
  vehicleConfiguration: NamedNode<"https://schema.org/vehicleConfiguration">;
  /** Information about the engine or engines of the vehicle. */
  vehicleEngine: NamedNode<"https://schema.org/vehicleEngine">;
  /** The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles. */
  vehicleIdentificationNumber: NamedNode<
    "http://schema.org/vehicleIdentificationNumber"
  >;
  /** The color or color combination of the interior of the vehicle. */
  vehicleInteriorColor: NamedNode<"https://schema.org/vehicleInteriorColor">;
  /** The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience. */
  vehicleInteriorType: NamedNode<"https://schema.org/vehicleInteriorType">;
  /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
  vehicleModelDate: NamedNode<"https://schema.org/vehicleModelDate">;
  /** The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons. */
  vehicleSeatingCapacity: NamedNode<
    "https://schema.org/vehicleSeatingCapacity"
  >;
  /** Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale. */
  vehicleSpecialUsage: NamedNode<"https://schema.org/vehicleSpecialUsage">;
  /** The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars). */
  vehicleTransmission: NamedNode<"https://schema.org/vehicleTransmission">;
  /** 'vendor' is an earlier term for 'seller'. */
  vendor: NamedNode<"https://schema.org/vendor">;
  /** Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]]. */
  verificationFactCheckingPolicy: NamedNode<
    "http://schema.org/verificationFactCheckingPolicy"
  >;
  /** The version of the CreativeWork embodied by a specified resource. */
  version: NamedNode<"https://schema.org/version">;
  /** An embedded video object. */
  video: NamedNode<"https://schema.org/video">;
  /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
  videoFormat: NamedNode<"https://schema.org/videoFormat">;
  /** The frame size of the video. */
  videoFrameSize: NamedNode<"https://schema.org/videoFrameSize">;
  /** The quality of the video. */
  videoQuality: NamedNode<"https://schema.org/videoQuality">;
  /** Identifies the volume of publication or multi-part work; for example, "iii" or "2". */
  volumeNumber: NamedNode<"https://schema.org/volumeNumber">;
  /** Any FDA or other warnings about the drug (text or URL). */
  warning: NamedNode<"https://schema.org/warning">;
  /** The warranty promise(s) included in the offer. */
  warranty: NamedNode<"https://schema.org/warranty">;
  /** The warranty promise(s) included in the offer. */
  warrantyPromise: NamedNode<"https://schema.org/warrantyPromise">;
  /** The scope of the warranty promise. */
  warrantyScope: NamedNode<"https://schema.org/warrantyScope">;
  /** The time when a passenger can check into the flight online. */
  webCheckinTime: NamedNode<"https://schema.org/webCheckinTime">;
  /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
  webFeed: NamedNode<"https://schema.org/webFeed">;
  /** The weight of the product or person. */
  weight: NamedNode<"https://schema.org/weight">;
  /** The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges. */
  weightTotal: NamedNode<"https://schema.org/weightTotal">;
  /** The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet */
  wheelbase: NamedNode<"https://schema.org/wheelbase">;
  /** The width of the item. */
  width: NamedNode<"https://schema.org/width">;
  /** A sub property of participant. The winner of the action. */
  winner: NamedNode<"https://schema.org/winner">;
  /** The number of words in the text of the Article. */
  wordCount: NamedNode<"https://schema.org/wordCount">;
  /**
   * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
   *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
   */
  workFeatured: NamedNode<"https://schema.org/workFeatured">;
  /** The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm). */
  workHours: NamedNode<"https://schema.org/workHours">;
  /** A contact location for a person's place of work. */
  workLocation: NamedNode<"https://schema.org/workLocation">;
  /** A work performed in some event, for example a play performed in a TheaterEvent. */
  workPerformed: NamedNode<"https://schema.org/workPerformed">;
  /** The movie presented during this event. */
  workPresented: NamedNode<"https://schema.org/workPresented">;
  /** Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure. */
  workload: NamedNode<"https://schema.org/workload">;
  /** Organizations that the person works for. */
  worksFor: NamedNode<"https://schema.org/worksFor">;
  /** The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed. */
  worstRating: NamedNode<"https://schema.org/worstRating">;
  /** An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
  xpath: NamedNode<"https://schema.org/xpath">;
  /** The year an [[Accommodation]] was constructed. This corresponds to the [YearBuilt field in RESO](https://ddwiki.reso.org/display/DDW17/YearBuilt+Field). */
  yearBuilt: NamedNode<"https://schema.org/yearBuilt">;
  /** The size of the business in annual revenue. */
  yearlyRevenue: NamedNode<"https://schema.org/yearlyRevenue">;
  /** The age of the business. */
  yearsInOperation: NamedNode<"https://schema.org/yearsInOperation">;
}

const builder = namespace("http://schema.org/") as any;
export const strict = builder as NamespaceBuilder<keyof Schema> & Schema;
export const loose = builder as NamespaceBuilder & Schema;
