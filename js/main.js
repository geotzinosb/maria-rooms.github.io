// Mobile menu functionality
// Maria Rooms JavaScript loaded!

// Language translations
window.translations = {
    en: {
        // Navigation
        home: "Home",
        apartments: "Apartments", 
        location: "Location",
        sightseeing: "Sightseeing",
        contact: "Contact",
        book: "Book Now",
        
        // Hero Section
        welcomeTo: "Welcome to",
        heroSubtitle: "Cozy vacation apartments in Vrasná, Greece. Enjoy authentic Greek hospitality with modern amenities including fully equipped kitchen, air conditioning, high-speed WiFi, free parking, and convenient access to Lidl supermarket and 650m from the beach. Perfect for relaxation or remote work.",
        viewApartments: "View Apartments",
        
        // Welcome Section
        welcomeTitle: "Welcome to Maria Rooms!",
        welcomeSubtitle: "Located in Vrasná, just 46.7 km from Sérrai. Ouranoupoli is 48.3 km away. Free WiFi is provided and free private parking is available on site.",
        welcomeText1: "The property is air conditioned and is equipped with a flat-screen TV. There is also a kitchenette, equipped with a toaster, refrigerator and stovetop. Bed linen are available.",
        welcomeText2: "From Thessaloniki airport is about 99km and from there, a 2 hours trip to Vrasna. It is a quiet place near the tiny forest that makes nature more beautiful!",
        
        // Apartments Section
        ourApartments: "Our Apartments",
        apartmentsSubtitle: "Our hotel has 6 rooms with shutters, mosquito nets and tents, it's 100m from the main road so it is suitable for quiet sleep!",
        available: "Available",
        limitedAvailability: "Limited Availability",
        apartmentDescription: "Beautiful studio apartment with modern amenities, perfect for your summer vacation in Vrasna.",
        apartmentTitle: "Apartment",
        
        // Individual Apartment Details
        studioApartment1: "Studio 1 - Studio with Balcony",
        studioApartment1Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        studioApartment2: "Studio 2 - Studio with Balcony",
        studioApartment2Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        studioApartment3: "Studio 3 - Studio with Balcony",
        studioApartment3Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        studioApartment4: "Studio 4 - Studio with Balcony",
        studioApartment4Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        studioApartment5: "Studio 5 - Studio with Balcony",
        studioApartment5Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        studioApartment6: "Studio 6 - Studio with Balcony",
        studioApartment6Description: "23m² studio with balcony and garden views. Air conditioning, flat-screen TV, and fully equipped kitchen.",
        maxGuests: "Max 2 guests",
        
        // Amenities Section
        amenities: "Amenities & Features",
        amenitiesSubtitle: "Everything you need for a comfortable stay",
        entertainment: "Entertainment & Comfort",
        flatScreenTV: "Flat-screen TV",
        freeWifi: "Free Wi-Fi",
        airConditioning: "Air conditioning",
        wardrobe: "Wardrobe",
        kitchen: "Kitchen & Dining",
        kitchenette: "Kitchenette",
        toasterKettle: "Toaster & Kettle",
        refrigerator: "Refrigerator",
        stovetop: "Stovetop",
        outdoorServices: "Outdoor & Services",
        freeParking: "Free parking",
        privateTerrace: "Private terrace",
        mosquitoNets: "Mosquito nets",
        bedLinen: "Bed linen included",
        
        // Reviews Section
        guestReviews: "Guest Reviews",
        reviewsSubtitle: "What our guests say about their stay",
        verifiedGuest: "Verified Guest",
        review1: "Very nice and quiet place, in a small forest. The studio was very well equipped, everything you need in the kitchen, with a free parking space and wi-fi. Maria, the landlord, speaks English and is very welcoming and charming.",
        review2: "Owner very kind and helpful. Location is quiet. Room has everything but not an oven nor a freezer, only hot plates and refrigerator. Besides some spiders in bathroom the room is clean.",
        review3: "Perfect place for accommodation, very comfort studios with new and sufficient furniture. The place is very quiet, surrounded by trees. There is a terrace in front of each studio.",
        stefan: "Stefan",
        georgios: "Georgios",
        svilen: "Svilen",
        
        // Location Section
        locationTitle: "Location & Surroundings",
        locationSubtitle: "Perfectly situated in the heart of Vrasna",
        openInGoogleMaps: "Open in Google Maps",
        perfectLocation: "Perfect Location",
        perfectLocationDesc: "100m from main road for quiet sleep, 650m from beautiful beach with shops and restaurants.",
        convenientAmenities: "Convenient Amenities",
        convenientAmenitiesDesc: "Near Lidl supermarket, shops 200m away (3 min walk), multiple parking options available.",
        naturalBeauty: "Natural Beauty",
        naturalBeautyDesc: "Surrounded by tiny forest, quiet and peaceful environment perfect for relaxation.",
        mariaRoomsLocation: "📍 Maria Rooms - Paralia Vrasnon, Vrasná, Greece",
        
                       // Sightseeing Section
               sightseeingTitle: "Sightseeing & Attractions",
               sightseeingSubtitle: "Discover the beautiful surroundings",
               amphipolis: "Amphipolis",
               amphipolisDesc: "Ancient Greek city (polis) and later Roman city, whose impressive remains can still be seen. A must-visit historical site.",
               stavros: "Stavros",
               stavrosDesc: "Village near Vrasna and community of the Volvi municipality. Covers an area of 16.5 km² with beautiful landscapes.",
               asprovalta: "Asprovalta",
               asprovaltaDesc: "Town very near Vrasna, built in the 16th century according to Simonopetra monastery manuscripts.",
               viewOnMap: "View on Map",
        
        // Contact Section
        contactTitle: "Contact Us",
        contactSubtitle: "Ready to book your perfect summer getaway? Get in touch with us for any questions or reservations.",
        sendMessage: "Send Message",
        address: "Address",
        phoneNumbers: "Phone Numbers",
        german: "German:",
        greek: "Greek:",
        languages: "Languages",
        languagesDesc: "We speak Greek, German, Czech and English",
        fullName: "Full Name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        preferredDates: "Preferred Dates",
        message: "Message",
        requiredFields: "Required fields",
        
        // Date Picker Translations
        datePickerPlaceholder: "Select dates...",
        datePickerRangeSeparator: " to ",
        datePickerMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datePickerWeekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datePickerWeekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datePickerToday: "Today",
        datePickerClear: "Clear",
        datePickerClose: "Close",
        
        // CTA Section
        readyToBook: "Ready to Experience Greek Hospitality?",
        ctaTitle: "Ready to Experience Greek Hospitality?",
        ctaSubtitle: "Book your perfect summer getaway today and enjoy the beautiful beaches, incredible sea views, and unforgettable memories in Vrasna.",
        bookNow: "Book Now",
        bookNowOnBooking: "Book Now on Booking.com",
        
        // Additional sections
        apartmentsTitle: "Our Apartments",
        ourApartments: "Our Apartments",
        apartmentsTitleKey: "Our Apartments",
        apartmentsTitleKey2: "Our Apartments",
        apartmentsTitleKey3: "Our Apartments",
        apartmentsTitleKey4: "Our Apartments",
        apartmentsTitleKey5: "Our Apartments",
        apartmentsTitleKey6: "Our Apartments",
        apartmentsTitleKey7: "Our Apartments",
        apartmentsTitleKey8: "Our Apartments",
        apartmentsTitleKey9: "Our Apartments",
        apartmentsTitleKey10: "Our Apartments",
        apartmentsTitleKey11: "Our Apartments",
        apartmentsTitleKey12: "Our Apartments",
        apartmentsTitleKey13: "Our Apartments",
        apartmentsTitleKey14: "Our Apartments",
        apartmentsTitleKey15: "Our Apartments",
        apartmentsTitleKey16: "Our Apartments",
        apartmentsTitleKey17: "Our Apartments",
        apartmentsTitleKey18: "Our Apartments",
        apartmentsTitleKey19: "Our Apartments",
        apartmentsTitleKey20: "Our Apartments",
        apartmentsTitleKey21: "Our Apartments",
        apartmentsTitleKey22: "Our Apartments",
        apartmentsTitleKey23: "Our Apartments",
        apartmentsTitleKey24: "Our Apartments",
        apartmentsTitleKey25: "Our Apartments",
        apartmentsTitleKey26: "Our Apartments",
        apartmentsTitleKey27: "Our Apartments",
        apartmentsTitleKey28: "Our Apartments",
        apartmentsTitleKey29: "Our Apartments",
        apartmentsTitleKey30: "Our Apartments",
        apartmentsTitleKey31: "Our Apartments",
        apartmentsTitleKey32: "Our Apartments",
        apartmentsTitleKey33: "Our Apartments",
        apartmentsTitleKey34: "Our Apartments",
        apartmentsSubtitle: "Our hotel has 6 rooms with shutters, mosquito nets and tents, it's 100m from the main road so it is suitable for quiet sleep!",
        contactUs: "Contact Us",
        contactTitle: "Contact Us",
        contactSubtitle: "Ready to book your perfect summer getaway? Get in touch with us for any questions or reservations.",
        
        // Footer
        allRightsReserved: "All rights reserved.",
        addressText: "Paralia Vrasnon, Vrasná, Greece",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        footerDescription: "Cozy vacation apartments in Vrasná, Greece. Enjoy authentic Greek hospitality with modern amenities including fully equipped kitchen, air conditioning, high-speed WiFi, free parking, and convenient access to Lidl supermarket and 650m from the beach. Perfect for relaxation or remote work.",
        impressum: "Impressum:",
        
        // Navigation Menu
        home: "Home",
        apartments: "Apartments",
        location: "Location",
        sightseeing: "Sightseeing",
        contact: "Contact",
        book: "Book Now",
        
        // Language
        language: "Language",
        // Mobile Menu
        menu: "Menu",
        darkMode: "Dark Mode",
        languageSelector: "Language / Γλώσσα / Sprache / Език",
        contactUs: "Contact Us",
        followUs: "Follow Us",
    },
    el: {
        // Navigation
        home: "Αρχική",
        apartments: "Διαμερίσματα",
        location: "Τοποθεσία", 
        sightseeing: "Αξιοθέατα",
        contact: "Επικοινωνία",
        bookNow: "Κράτηση Τώρα",
        
        // Hero Section
        welcomeTo: "Καλώς ήρθατε στο",
        heroSubtitle: "Ζεστά διαμερίσματα διακοπών στα Βρασνά, Ελλάδα. Απολαύστε αυθεντική ελληνική φιλοξενία με μοντέρνες ανέσεις, συμπεριλαμβανομένων πλήρως εξοπλισμένης κουζίνας, κλιματισμού, υψηλής ταχύτητας WiFi, δωρεάν στάθμευση και βολική πρόσβαση στο σούπερ μάρκετ Lidl και 650μ από την παραλία. Ιδανικό για χαλάρωση ή απομακρυσμένη εργασία.",
        viewApartments: "Δείτε τα Διαμερίσματα",
        
        // Welcome Section
        welcomeTitle: "Καλώς ήρθατε στο Maria Rooms!",
        welcomeSubtitle: "Βρίσκεται στα Βρασνά, μόλις 46,7 χλμ από τη Σέρρες. Η Ουρανούπολη απέχει 48,3 χλμ. Παρέχεται δωρεάν WiFi και δωρεάν ιδιωτικό πάρκινγκ στη διάθεσή σας.",
        welcomeText1: "Η ιδιοκτησία είναι κλιματιζόμενη και είναι εξοπλισμένη με επίπεδη τηλεόραση. Υπάρχει επίσης μικρή κουζίνα, εξοπλισμένη με τοστιέρα, ψυγείο και κουζινόκαυστήρα. Διατίθενται σεντόνια.",
        welcomeText2: "Από το αεροδρόμιο της Θεσσαλονίκης είναι περίπου 99χλμ και από εκεί, ένα ταξίδι 2 ωρών στα Βρασνά. Είναι ένα ήσυχο μέρος κοντά στο μικρό δάσος που κάνει τη φύση πιο όμορφη!",
        
        // Apartments Section
        ourApartments: "Τα Διαμερίσματά μας",
        apartmentsTitle: "Τα Διαμερίσματά μας",
        apartmentsTitleKey: "Τα Διαμερίσματά μας",
        apartmentsTitleKey2: "Τα Διαμερίσματά μας",
        apartmentsTitleKey3: "Τα Διαμερίσματά μας",
        apartmentsTitleKey4: "Τα Διαμερίσματά μας",
        apartmentsTitleKey5: "Τα Διαμερίσματά μας",
        apartmentsTitleKey6: "Τα Διαμερίσματά μας",
        apartmentsTitleKey7: "Τα Διαμερίσματά μας",
        apartmentsTitleKey8: "Τα Διαμερίσματά μας",
        apartmentsTitleKey9: "Τα Διαμερίσματά μας",
        apartmentsTitleKey10: "Τα Διαμερίσματά μας",
        apartmentsTitleKey11: "Τα Διαμερίσματά μας",
        apartmentsTitleKey12: "Τα Διαμερίσματά μας",
        apartmentsTitleKey13: "Τα Διαμερίσματά μας",
        apartmentsTitleKey14: "Τα Διαμερίσματά μας",
        apartmentsTitleKey15: "Τα Διαμερίσματά μας",
        apartmentsTitleKey16: "Τα Διαμερίσματά μας",
        apartmentsTitleKey17: "Τα Διαμερίσματά μας",
        apartmentsTitleKey18: "Τα Διαμερίσματά μας",
        apartmentsTitleKey19: "Τα Διαμερίσματά μας",
        apartmentsTitleKey20: "Τα Διαμερίσματά μας",
        apartmentsTitleKey21: "Τα Διαμερίσματά μας",
        apartmentsTitleKey22: "Τα Διαμερίσματά μας",
        apartmentsTitleKey23: "Τα Διαμερίσματά μας",
        apartmentsTitleKey24: "Τα Διαμερίσματά μας",
        apartmentsTitleKey25: "Τα Διαμερίσματά μας",
        apartmentsTitleKey26: "Τα Διαμερίσματά μας",
        apartmentsTitleKey27: "Τα Διαμερίσματά μας",
        apartmentsTitleKey28: "Τα Διαμερίσματά μας",
        apartmentsTitleKey29: "Τα Διαμερίσματά μας",
        apartmentsTitleKey30: "Τα Διαμερίσματά μας",
        apartmentsTitleKey31: "Τα Διαμερίσματά μας",
        apartmentsTitleKey32: "Τα Διαμερίσματά μας",
        apartmentsTitleKey33: "Τα Διαμερίσματά μας",
        apartmentsTitleKey34: "Τα Διαμερίσματά μας",
        apartmentsSubtitle: "Το ξενοδοχείο μας έχει 6 δωμάτια με ρολά, κουνουπιέρες και τέντες, είναι 100μ από τον κύριο δρόμο οπότε είναι κατάλληλο για ήσυχο ύπνο!",
        available: "Διαθέσιμο",
        limitedAvailability: "Περιορισμένη Διαθεσιμότητα",
        apartmentDescription: "Όμορφο στούντιο διαμέρισμα με μοντέρνες ανέσεις, ιδανικό για τις καλοκαιρινές σας διακοπές στα Βρασνά.",
        apartmentTitle: "Διαμέρισμα",
        
        // Individual Apartment Details
        studioApartment1: "Στούντιο 1 - Στούντιο με Βεράντα",
        studioApartment1Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        studioApartment2: "Στούντιο 2 - Στούντιο με Βεράντα",
        studioApartment2Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        studioApartment3: "Στούντιο 3 - Στούντιο με Βεράντα",
        studioApartment3Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        studioApartment4: "Στούντιο 4 - Στούντιο με Βεράντα",
        studioApartment4Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        studioApartment5: "Στούντιο 5 - Στούντιο με Βεράντα",
        studioApartment5Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        studioApartment6: "Στούντιο 6 - Στούντιο με Βεράντα",
        studioApartment6Description: "Στούντιο 23m² με βεράντα και θέα στον κήπο. Κλιματισμός, επίπεδη τηλεόραση και πλήρως εξοπλισμένη κουζίνα.",
        maxGuests: "Μέγιστοι 2 επισκέπτες",
        
        // Amenities Section
        amenities: "Ανέσεις & Χαρακτηριστικά",
        amenitiesSubtitle: "Όλα όσα χρειάζεστε για μια άνετη διαμονή",
        entertainment: "Ψυχαγωγία & Άνεση",
        flatScreenTV: "Επίπεδη τηλεόραση",
        freeWifi: "Δωρεάν Wi-Fi",
        airConditioning: "Κλιματισμός",
        wardrobe: "Ντουλάπα",
        kitchen: "Κουζίνα & Εστίαση",
        kitchenette: "Μικρή κουζίνα",
        toasterKettle: "Φρυγανιέρα & βραστήρας",
        refrigerator: "Ψυγείο",
        stovetop: "Κουζινόκαυστήρας",
        outdoorServices: "Εξωτερικοί Χώροι & Υπηρεσίες",
        freeParking: "Δωρεάν πάρκινγκ",
        privateTerrace: "Ιδιωτική βεράντα",
        mosquitoNets: "Κουνουπιέρες",
        bedLinen: "Σεντόνια συμπεριλαμβάνονται",
        
        // Reviews Section
        guestReviews: "Κριτικές Επισκεπτών",
        reviewsSubtitle: "Τι λένε οι επισκέπτες μας για τη διαμονή τους",
        verifiedGuest: "Επιβεβαιωμένος Επισκέπτης",
        review1: "Πολύ ωραίο και ήσυχο μέρος, σε ένα μικρό δάσος. Το στούντιο ήταν πολύ καλά εξοπλισμένο, όλα όσα χρειάζεστε στην κουζίνα, με δωρεάν χώρο στάθμευσης και wi-fi. Η Μαρία, η ιδιοκτήτρια, μιλάει αγγλικά και είναι πολύ φιλόξενη και γοητευτική.",
        review2: "Ο ιδιοκτήτης πολύ ευγενικός και εξυπηρετικός. Η τοποθεσία είναι ήσυχη. Το δωμάτιο έχει τα πάντα αλλά όχι φούρνο ούτε κατάψυξη, μόνο καυστήρες και ψυγείο. Εκτός από μερικές αράχνες στο μπάνιο το δωμάτιο είναι καθαρό.",
        review3: "Τέλεια τοποθεσία για διαμονή, πολύ άνετα στούντιο με νέα και επαρκή έπιπλα. Το μέρος είναι πολύ ήσυχο, περιτριγυρισμένο από δέντρα. Υπάρχει βεράντα μπροστά από κάθε στούντιο.",
        stefan: "Στεφάνος",
        georgios: "Γεώργιος",
        svilen: "Σβίλεν",
        
        // Location Section
        locationTitle: "Τοποθεσία & Περιβάλλον",
        locationSubtitle: "Ιδανικά τοποθετημένο στην καρδιά της Βράσνας",
        openInGoogleMaps: "Άνοιγμα στο Google Maps",
        perfectLocation: "Ιδανική Τοποθεσία",
        perfectLocationDesc: "100μ από τον κύριο δρόμο για ήσυχο ύπνο, 650μ από την όμορφη παραλία με καταστήματα και εστιατόρια.",
        convenientAmenities: "Βολικές Ανέσεις",
        convenientAmenitiesDesc: "Κοντά στο σουπερμάρκετ Lidl, καταστήματα 200μ μακριά (3 λεπτά με τα πόδια), πολλαπλές επιλογές στάθμευσης.",
        naturalBeauty: "Φυσική Ομορφιά",
        naturalBeautyDesc: "Περιτριγυρισμένο από μικρό δάσος, ήσυχο και γαλήνιο περιβάλλον ιδανικό για χαλάρωση.",
        mariaRoomsLocation: "📍 Maria Rooms - Παραλία Βράσνων, Βράσνα, Ελλάδα",
        
        // Sightseeing Section
        sightseeingTitle: "Αξιοθέατα & Ατραξιόν",
        sightseeingSubtitle: "Ανακαλύψτε τα όμορφα περίχωρα",
        amphipolis: "Αμφίπολη",
        amphipolisDesc: "Αρχαία ελληνική πόλη (πόλις) και αργότερα ρωμαϊκή πόλη, τα εντυπωσιακά ερείπια της οποίας μπορούν ακόμα να δουν. Ένας ιστορικός τόπος που πρέπει να επισκεφθείτε.",
        stavros: "Σταυρός",
        stavrosDesc: "Χωριό κοντά στα Βρασνά και κοινότητα του δήμου Βόλβης. Καλύπτει έκταση 16,5 km² με όμορφα τοπία.",
        asprovalta: "Ασπρόβαλτα",
        asprovaltaDesc: "Πόλη πολύ κοντά στα Βρασνά, χτισμένη τον 16ο αιώνα σύμφωνα με χειρόγραφα της μονής Σιμωνόπετρα.",
        viewOnMap: "Προβολή στο χάρτη",
        
        // Contact Section
        contactTitle: "Επικοινωνήστε μαζί μας",
        contactSubtitle: "Είστε έτοιμοι να κλείσετε την τέλεια καλοκαιρινή διακοπή σας; Επικοινωνήστε μαζί μας για οποιεσδήποτε ερωτήσεις ή κρατήσεις.",
        sendMessage: "Αποστολή Μηνύματος",
        address: "Διεύθυνση",
        phoneNumbers: "Τηλέφωνα",
        german: "Γερμανικά:",
        greek: "Ελληνικά:",
        languages: "Γλώσσες",
        languagesDesc: "Μιλάμε ελληνικά, γερμανικά, τσέχικα και αγγλικά",
        fullName: "Πλήρες Όνομα",
        emailAddress: "Διεύθυνση Email",
        phoneNumber: "Τηλέφωνο",
        preferredDates: "Προτεινόμενες Ημερομηνίες",
        message: "Μήνυμα",
        requiredFields: "Υποχρεωτικά πεδία",
        
        // Date Picker Translations
        datePickerPlaceholder: "Επιλέξτε ημερομηνίες...",
        datePickerRangeSeparator: " έως ",
        datePickerMonths: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        datePickerWeekdays: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        datePickerWeekdaysShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        datePickerToday: "Σήμερα",
        datePickerClear: "Καθαρισμός",
        datePickerClose: "Κλείσιμο",
        
        // CTA Section
        readyToBook: "Είστε Έτοιμοι να Ζήσετε την Ελληνική Φιλοξενία;",
        ctaTitle: "Είστε Έτοιμοι να Ζήσετε την Ελληνική Φιλοξενία;",
        ctaSubtitle: "Κλείστε τις ιδανικές σας καλοκαιρινές διακοπές σήμερα και απολαύστε τις όμορφες παραλίες, τις απίστευτες θέας στη θάλασσα και τις αξέχαστες αναμνήσεις στα Βρασνά.",
        bookNowOnBooking: "Κράτηση Τώρα στο Booking.com",
        contactUs: "Επικοινωνήστε μαζί μας",
        
        // Footer
        allRightsReserved: "Όλα τα δικαιώματα διατηρούνται.",
        addressText: "Παραλία Βράσνων, Βράσνα, Ελλάδα",
        quickLinks: "Γρήγοροι Σύνδεσμοι",
        contactInfo: "Στοιχεία Επικοινωνίας",
        footerDescription: "Ζεστά διαμερίσματα διακοπών στα Βρασνά, Ελλάδα. Απολαύστε αυθεντική ελληνική φιλοξενία με μοντέρνες ανέσεις, συμπεριλαμβανομένων πλήρως εξοπλισμένης κουζίνας, κλιματισμού, υψηλής ταχύτητας WiFi, δωρεάν στάθμευση και βολική πρόσβαση στο σούπερ μάρκετ Lidl και 650μ από την παραλία. Ιδανικό για χαλάρωση ή απομακρυσμένη εργασία.",
        impressum: "Impressum:",
        
        // Language
        language: "Γλώσσα",
        // Mobile Menu
        menu: "Menu",
        darkMode: "Dark Mode",
        languageSelector: "Language / Γλώσσα / Sprache / Език",
        contactUs: "Επικοινωνήστε μαζί μας",
        followUs: "Ακολουθήστε μας",
    },
    de: {
        // Navigation
        home: "Startseite",
        apartments: "Apartments",
        location: "Standort",
        sightseeing: "Sehenswürdigkeiten", 
        contact: "Kontakt",
        bookNow: "Jetzt Buchen",
        
        // Hero Section
        welcomeTo: "Willkommen bei",
        heroSubtitle: "Gemütliche Ferienwohnungen in Vrasná, Griechenland. Genießen Sie authentische griechische Gastfreundschaft mit modernen Annehmlichkeiten, einschließlich vollausgestatteter Küche, Klimaanlage, Highspeed-WLAN, kostenlosem Parkplatz und bequemem Zugang zum Lidl-Supermarkt und 650m vom Strand entfernt. Perfekt für Entspannung oder Remote-Arbeit.",
        viewApartments: "Apartments Ansehen",
        
        // Welcome Section
        welcomeTitle: "Willkommen bei Maria Rooms!",
        welcomeSubtitle: "Gelegen in Vrasná, nur 46,7 km von Sérrai entfernt. Ouranoupoli ist 48,3 km entfernt. Kostenloses WLAN wird bereitgestellt und kostenlose Privatparkplätze stehen vor Ort zur Verfügung.",
        welcomeText1: "Die Unterkunft ist klimatisiert und mit einem Flachbildfernseher ausgestattet. Es gibt auch eine Küchenzeile, ausgestattet mit Toaster, Kühlschrank und Herd. Bettwäsche ist verfügbar.",
        welcomeText2: "Vom Flughafen Thessaloniki sind es etwa 99 km und von dort eine 2-stündige Fahrt nach Vrasna. Es ist ein ruhiger Ort in der Nähe des kleinen Waldes, der die Natur noch schöner macht!",
        
        // Apartments Section
        ourApartments: "Unsere Apartments",
        apartmentsTitle: "Unsere Apartments",
        apartmentsTitleKey: "Unsere Apartments",
        apartmentsTitleKey2: "Unsere Apartments",
        apartmentsTitleKey3: "Unsere Apartments",
        apartmentsTitleKey4: "Unsere Apartments",
        apartmentsTitleKey5: "Unsere Apartments",
        apartmentsTitleKey6: "Unsere Apartments",
        apartmentsTitleKey7: "Unsere Apartments",
        apartmentsTitleKey8: "Unsere Apartments",
        apartmentsTitleKey9: "Unsere Apartments",
        apartmentsTitleKey10: "Unsere Apartments",
        apartmentsTitleKey11: "Unsere Apartments",
        apartmentsTitleKey12: "Unsere Apartments",
        apartmentsTitleKey13: "Unsere Apartments",
        apartmentsTitleKey14: "Unsere Apartments",
        apartmentsTitleKey15: "Unsere Apartments",
        apartmentsTitleKey16: "Unsere Apartments",
        apartmentsTitleKey17: "Unsere Apartments",
        apartmentsTitleKey18: "Unsere Apartments",
        apartmentsTitleKey19: "Unsere Apartments",
        apartmentsTitleKey20: "Unsere Apartments",
        apartmentsTitleKey21: "Unsere Apartments",
        apartmentsTitleKey22: "Unsere Apartments",
        apartmentsTitleKey23: "Unsere Apartments",
        apartmentsTitleKey24: "Unsere Apartments",
        apartmentsTitleKey25: "Unsere Apartments",
        apartmentsTitleKey26: "Unsere Apartments",
        apartmentsTitleKey27: "Unsere Apartments",
        apartmentsTitleKey28: "Unsere Apartments",
        apartmentsTitleKey29: "Unsere Apartments",
        apartmentsTitleKey30: "Unsere Apartments",
        apartmentsTitleKey31: "Unsere Apartments",
        apartmentsTitleKey32: "Unsere Apartments",
        apartmentsTitleKey33: "Unsere Apartments",
        apartmentsSubtitle: "Unser Hotel hat 6 Zimmer mit Rollläden, Moskitonetzen und Zelten, es ist 100m von der Hauptstraße entfernt, also geeignet für ruhigen Schlaf!",
        available: "Verfügbar",
        limitedAvailability: "Begrenzte Verfügbarkeit",
        apartmentDescription: "Schönes Studio-Apartment mit modernen Annehmlichkeiten, perfekt für Ihren Sommerurlaub in Vrasna.",
        apartmentTitle: "Apartment",
        
        // Individual Apartment Details
        studioApartment1: "Studio 1 - Studio mit Balkon",
        studioApartment1Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        studioApartment2: "Studio 2 - Studio mit Balkon",
        studioApartment2Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        studioApartment3: "Studio 3 - Studio mit Balkon",
        studioApartment3Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        studioApartment4: "Studio 4 - Studio mit Balkon",
        studioApartment4Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        studioApartment5: "Studio 5 - Studio mit Balkon",
        studioApartment5Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        studioApartment6: "Studio 6 - Studio mit Balkon",
        studioApartment6Description: "23m² Studio mit Balkon und Gartenblick. Klimaanlage, Flachbildfernseher und voll ausgestattete Küche.",
        maxGuests: "Max. 2 Gäste",
        
        // Amenities Section
        amenities: "Annehmlichkeiten & Features",
        amenitiesSubtitle: "Alles, was Sie für einen komfortablen Aufenthalt benötigen",
        entertainment: "Unterhaltung & Komfort",
        flatScreenTV: "Flachbildfernseher",
        freeWifi: "Kostenloses WLAN",
        airConditioning: "Klimaanlage",
        wardrobe: "Kleiderschrank",
        kitchen: "Küche & Essbereich",
        kitchenette: "Küchenzeile",
        toasterKettle: "Toaster & Wasserkocher",
        refrigerator: "Kühlschrank",
        stovetop: "Herd",
        outdoorServices: "Außenbereiche & Services",
        freeParking: "Kostenlose Parkplätze",
        privateTerrace: "Private Terrasse",
        mosquitoNets: "Moskitonetze",
        bedLinen: "Bettwäsche inklusive",
        
        // Reviews Section
        guestReviews: "Gästebewertungen",
        reviewsSubtitle: "Was unsere Gäste über ihren Aufenthalt sagen",
        verifiedGuest: "Verifizierter Gast",
        review1: "Sehr schöner und ruhiger Ort, in einem kleinen Wald. Das Studio war sehr gut ausgestattet, alles was man in der Küche braucht, mit kostenlosem Parkplatz und WLAN. Maria, die Vermieterin, spricht Englisch und ist sehr einladend und charmant.",
        review2: "Besitzer sehr freundlich und hilfsbereit. Lage ist ruhig. Das Zimmer hat alles, aber keinen Ofen oder Gefrierschrank, nur Kochplatten und Kühlschrank. Abgesehen von einigen Spinnen im Bad ist das Zimmer sauber.",
        review3: "Perfekter Ort für Unterkunft, sehr komfortable Studios mit neuen und ausreichenden Möbeln. Der Ort ist sehr ruhig, umgeben von Bäumen. Es gibt eine Terrasse vor jedem Studio.",
        stefan: "Stefan",
        georgios: "Georgios",
        svilen: "Svilen",
        
        // Location Section
        locationTitle: "Standort & Umgebung",
        locationSubtitle: "Perfekt gelegen im Herzen von Vrasna",
        openInGoogleMaps: "In Google Maps öffnen",
        perfectLocation: "Perfekter Standort",
        perfectLocationDesc: "100m vom Hauptweg für ruhigen Schlaf, 650m vom schönen Strand mit Geschäften und Restaurants.",
        convenientAmenities: "Praktische Annehmlichkeiten",
        convenientAmenitiesDesc: "In der Nähe des Lidl-Supermarkts, Geschäfte 200m entfernt (3 Min. zu Fuß), mehrere Parkmöglichkeiten verfügbar.",
        naturalBeauty: "Natürliche Schönheit",
        naturalBeautyDesc: "Umgeben von kleinem Wald, ruhige und friedliche Umgebung perfekt für Entspannung.",
        mariaRoomsLocation: "📍 Maria Rooms - Paralia Vrasnon, Vrasná, Griechenland",
        
        // Sightseeing Section
        sightseeingTitle: "Sehenswürdigkeiten & Attraktionen",
        sightseeingSubtitle: "Entdecken Sie die schöne Umgebung",
        amphipolis: "Amphipolis",
        amphipolisDesc: "Antike griechische Stadt (Polis) und später römische Stadt, deren beeindruckende Überreste noch zu sehen sind. Ein historischer Ort, den man besuchen muss.",
        stavros: "Stavros",
        stavrosDesc: "Dorf in der Nähe von Vrasna und Gemeinde der Gemeinde Volvi. Bedeckt eine Fläche von 16,5 km² mit schönen Landschaften.",
        asprovalta: "Asprovalta",
        asprovaltaDesc: "Stadt sehr nahe an Vrasna, erbaut im 16. Jahrhundert nach Simonopetra-Klosterhandschriften.",
        viewOnMap: "Auf Karte anzeigen",
        
        // Contact Section
        contactTitle: "Kontaktieren Sie uns",
        contactSubtitle: "Bereit, Ihren perfekten Sommerurlaub zu buchen? Kontaktieren Sie uns für Fragen oder Reservierungen.",
        sendMessage: "Nachricht senden",
        address: "Adresse",
        phoneNumbers: "Telefonnummern",
        german: "Deutsch:",
        greek: "Griechisch:",
        languages: "Sprachen",
        languagesDesc: "Wir sprechen Griechisch, Deutsch, Tschechisch und Englisch",
        fullName: "Vollständiger Name",
        emailAddress: "E-Mail-Adresse",
        phoneNumber: "Telefonnummer",
        preferredDates: "Bevorzugte Daten",
        message: "Nachricht",
        requiredFields: "Pflichtfelder",
        
        // Date Picker Translations
        datePickerPlaceholder: "Daten auswählen...",
        datePickerRangeSeparator: " bis ",
        datePickerMonths: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        datePickerWeekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        datePickerWeekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        datePickerToday: "Heute",
        datePickerClear: "Löschen",
        datePickerClose: "Schließen",
        
        // CTA Section
        readyToBook: "Bereit, griechische Gastfreundschaft zu erleben?",
        ctaTitle: "Bereit, griechische Gastfreundschaft zu erleben?",
        ctaSubtitle: "Buchen Sie heute Ihren perfekten Sommerurlaub und genießen Sie die schönen Strände, unglaubliche Meerblick und unvergessliche Erinnerungen in Vrasna.",
        bookNowOnBooking: "Jetzt auf Booking.com buchen",
        contactUs: "Kontaktieren Sie uns",
        
        // Footer
        allRightsReserved: "Alle Rechte vorbehalten.",
        addressText: "Paralia Vrasnon, Vrasná, Griechenland",
        quickLinks: "Schnelllinks",
        contactInfo: "Kontaktinformationen",
        footerDescription: "Gemütliche Ferienwohnungen in Vrasná, Griechenland. Genießen Sie authentische griechische Gastfreundschaft mit modernen Annehmlichkeiten, einschließlich vollausgestatteter Küche, Klimaanlage, Highspeed-WLAN, kostenlosem Parkplatz und bequemem Zugang zum Lidl-Supermarkt und 650m vom Strand entfernt. Perfekt für Entspannung oder Remote-Arbeit.",
        impressum: "Impressum:",
        
        // Navigation Menu
        home: "Startseite",
        apartments: "Apartments",
        location: "Standort",
        sightseeing: "Sehenswürdigkeiten",
        contact: "Kontakt",
        book: "Jetzt buchen",
        
        // Language
        language: "Sprache",
        // Mobile Menu
        menu: "Menü",
        darkMode: "Dunkler Modus",
        languageSelector: "Sprache / Γλώσσα / Sprache / Език",
        contactUs: "Kontaktieren Sie uns",
        followUs: "Folgen Sie uns",
    },
    bg: {
        // Navigation
        home: "Начало",
        apartments: "Апартаменти",
        location: "Местоположение",
        sightseeing: "Забележителности",
        contact: "Контакти", 
        bookNow: "Резервирай Сега",
        
        // Hero Section
        welcomeTo: "Добре дошли в",
        heroSubtitle: "Уютни апартаменти за почивка във Врасна, Гърция. Научете автентично гръцко гостоприемство с модерни удобства, включително напълно оборудвана кухня, климатик, високоскоростен WiFi, безплатен паркинг и удобен достъп до супермаркет Lidl и 650м от плажа. Перфектно за релаксация или дистанционна работа.",
        viewApartments: "Виж Апартаментите",
        
        // Welcome Section
        welcomeTitle: "Добре дошли в Maria Rooms!",
        welcomeSubtitle: "Разположен във Врасна, само на 46,7 км от Серес. Оурануполи е на 48,3 км разстояние. Предоставя се безплатен WiFi и безплатен частен паркинг на място.",
        welcomeText1: "Имотът е климатизиран и е оборудван с плосък телевизор. Има също малка кухня, оборудвана с тостер, хладилник и котлон. Налични са чаршафи.",
        welcomeText2: "От летището в Солун е около 99 км и оттам, 2-часово пътуване до Врасна. Това е тихо място близо до малката гора, която прави природата по-красива!",
        
        // Apartments Section
        ourApartments: "Нашите Апартаменти",
        apartmentsTitle: "Нашите Апартаменти",
        apartmentsTitleKey: "Нашите Апартаменти",
        apartmentsTitleKey2: "Нашите Апартаменти",
        apartmentsTitleKey3: "Нашите Апартаменти",
        apartmentsTitleKey4: "Нашите Апартаменти",
        apartmentsTitleKey5: "Нашите Апартаменти",
        apartmentsTitleKey6: "Нашите Апартаменти",
        apartmentsTitleKey7: "Нашите Апартаменти",
        apartmentsTitleKey8: "Нашите Апартаменти",
        apartmentsTitleKey9: "Нашите Апартаменти",
        apartmentsTitleKey10: "Нашите Апартаменти",
        apartmentsTitleKey11: "Нашите Апартаменти",
        apartmentsTitleKey12: "Нашите Апартаменти",
        apartmentsTitleKey13: "Нашите Апартаменти",
        apartmentsTitleKey14: "Нашите Апартаменти",
        apartmentsTitleKey15: "Нашите Апартаменти",
        apartmentsTitleKey16: "Нашите Апартаменти",
        apartmentsTitleKey17: "Нашите Апартаменти",
        apartmentsTitleKey18: "Нашите Апартаменти",
        apartmentsTitleKey19: "Нашите Апартаменти",
        apartmentsTitleKey20: "Нашите Апартаменти",
        apartmentsTitleKey21: "Нашите Апартаменти",
        apartmentsTitleKey22: "Нашите Апартаменти",
        apartmentsTitleKey23: "Нашите Апартаменти",
        apartmentsTitleKey24: "Нашите Апартаменти",
        apartmentsTitleKey25: "Нашите Апартаменти",
        apartmentsTitleKey26: "Нашите Апартаменти",
        apartmentsTitleKey27: "Нашите Апартаменти",
        apartmentsTitleKey28: "Нашите Апартаменти",
        apartmentsTitleKey29: "Нашите Апартаменти",
        apartmentsTitleKey30: "Нашите Апартаменти",
        apartmentsTitleKey31: "Нашите Апартаменти",
        apartmentsTitleKey32: "Нашите Апартаменти",
        apartmentsTitleKey33: "Нашите Апартаменти",
        apartmentsSubtitle: "Хотелът ни има 6 стаи с щори, мрежи срещу комари и палатки, на 100м от главния път, така че е подходящ за тих сън!",
        available: "Наличен",
        limitedAvailability: "Ограничена Наличност",
        apartmentDescription: "Красив студио апартамент с модерни удобства, перфектен за вашата лятна почивка във Врасна.",
        apartmentTitle: "Апартамент",
        
        // Individual Apartment Details
        studioApartment1: "Студио 1 - Студио с Балкон",
        studioApartment1Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        studioApartment2: "Студио 2 - Студио с Балкон",
        studioApartment2Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        studioApartment3: "Студио 3 - Студио с Балкон",
        studioApartment3Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        studioApartment4: "Студио 4 - Студио с Балкон",
        studioApartment4Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        studioApartment5: "Студио 5 - Студио с Балкон",
        studioApartment5Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        studioApartment6: "Студио 6 - Студио с Балкон",
        studioApartment6Description: "Студио 23m² с балкон и изглед към градината. Климатик, плоскоекранен телевизор и напълно оборудвана кухня.",
        maxGuests: "Макс. 2 гости",
        
        // Amenities Section
        amenities: "Удобства & Характеристики",
        amenitiesSubtitle: "Всичко, което ви трябва за комфортен престой",
        entertainment: "Забавления & Комфорт",
        flatScreenTV: "Плоскоекранен телевизор",
        freeWifi: "Безплатен Wi-Fi",
        airConditioning: "Климатик",
        wardrobe: "Гардероб",
        kitchen: "Кухня & Трапезария",
        kitchenette: "Малка кухня",
        toasterKettle: "Тостер и чайник",
        refrigerator: "Хладилник",
        stovetop: "Котлон",
        outdoorServices: "Външни зони & Услуги",
        freeParking: "Безплатен паркинг",
        privateTerrace: "Частна тераса",
        mosquitoNets: "Мрежи против комари",
        bedLinen: "Чаршафи включени",
        
        // Reviews Section
        guestReviews: "Отзиви на гости",
        reviewsSubtitle: "Какво казват нашите гости за престоя си",
        verifiedGuest: "Потвърден гост",
        review1: "Много красиво и тихо място, в малка гора. Студиото беше много добре оборудвано, всичко необходимо в кухнята, с безплатен паркинг и безжичен интернет. Мария, собственичката, говори английски и е много гостоприемна и очарователна.",
        review2: "Собственикът много мил и полезен. Местоположението е тихо. Стаята има всичко, но не фурна или фризер, само горещи плочи и хладилник. Освен някои паяци в банята стаята е чиста.",
        review3: "Перфектно място за настаняване, много комфортни студия с нови и достатъчни мебели. Мястото е много тихо, заобиколено от дървета. Има тераса пред всяко студио.",
        stefan: "Стефан",
        georgios: "Георгиос",
        svilen: "Свилен",
        
        // Location Section
        locationTitle: "Местоположение & Околност",
        locationSubtitle: "Перфектно разположен в сърцето на Врасна",
        openInGoogleMaps: "Отвори в Google Maps",
        perfectLocation: "Перфектно местоположение",
        perfectLocationDesc: "100м от главния път за тих сън, 650м от красивата плажа с магазини и ресторанти.",
        convenientAmenities: "Удобни съоръжения",
        convenientAmenitiesDesc: "Близо до супермаркета Lidl, магазини на 200м разстояние (3 мин пеша), множество опции за паркиране.",
        naturalBeauty: "Природна красота",
        naturalBeautyDesc: "Заобиколен от малка гора, тиха и спокойна среда перфектна за релаксация.",
        mariaRoomsLocation: "📍 Maria Rooms - Паралия Враснон, Врасна, Гърция",
        
        // Sightseeing Section
        sightseeingTitle: "Забележителности & Атракции",
        sightseeingSubtitle: "Открийте красивата околност",
        amphipolis: "Амфиполис",
        amphipolisDesc: "Древен гръцки град (полис) и по-късно римски град, чиито впечатляващи останки все още могат да се видят. Историческо място, което трябва да посетите.",
        stavros: "Ставрос",
        stavrosDesc: "Село близо до Врасна и общност на община Вълви. Покрива площ от 16,5 km² с красиви пейзажи.",
        asprovalta: "Аспровалта",
        asprovaltaDesc: "Град много близо до Врасна, построен през 16-ти век според ръкописите на манастира Симонопетра.",
        viewOnMap: "Виж на картата",
        
        // Contact Section
        contactTitle: "Свържете се с нас",
        contactSubtitle: "Готови ли сте да резервирате перфектната си летна почивка? Свържете се с нас за въпроси или резервации.",
        sendMessage: "Изпрати съобщение",
        address: "Адрес",
        phoneNumbers: "Телефонни номера",
        german: "Немски:",
        greek: "Гръцки:",
        languages: "Езици",
        languagesDesc: "Говорим гръцки, немски, чешки и английски",
        fullName: "Пълно име",
        emailAddress: "Имейл адрес",
        phoneNumber: "Телефонен номер",
        preferredDates: "Предпочитани дати",
        message: "Съобщение",
        requiredFields: "Задължителни полета",
        
        // Date Picker Translations
        datePickerPlaceholder: "Изберете дати...",
        datePickerRangeSeparator: " до ",
        datePickerMonths: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        datePickerWeekdays: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        datePickerWeekdaysShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        datePickerToday: "Днес",
        datePickerClear: "Изчистване",
        datePickerClose: "Затваряне",
        
        // CTA Section
        readyToBook: "Готови ли сте да усетите гръцкото гостоприемство?",
        ctaTitle: "Готови ли сте да усетите гръцкото гостоприемство?",
        ctaSubtitle: "Резервирайте перфектната си лятна почивка днес и се насладете на красивите плажове, невероятните изгледи към морето и незабравимите спомени във Врасна.",
        bookNowOnBooking: "Резервирай сега в Booking.com",
        contactUs: "Свържете се с нас",
        
        // Footer
        allRightsReserved: "Всички права запазени.",
        addressText: "Паралия Враснон, Врасна, Гърция",
        quickLinks: "Бързи връзки",
        contactInfo: "Информация за контакт",
        footerDescription: "Уютни апартаменти за почивка във Врасна, Гърция. Научете автентично гръцко гостоприемство с модерни удобства, включително напълно оборудвана кухня, климатик, високоскоростен WiFi, безплатен паркинг и удобен достъп до супермаркет Lidl и 650м от плажа. Перфектно за релаксация или дистанционна работа.",
        impressum: "Impressum:",
        
        // Language
        language: "Език",
        // Mobile Menu
        menu: "Menu",
        darkMode: "Dark Mode",
        languageSelector: "Language / Γλώσσα / Sprache / Език",
        contactUs: "Свържете се с нас",
        followUs: "Последвайте ни",
    }
};

document.addEventListener('DOMContentLoaded', function() {
            // DOM loaded, initializing...
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const currentLanguageElement = document.getElementById('current-language');
    const languageOptions = document.querySelectorAll('.language-option');
    const mobileLanguageOptions = document.querySelectorAll('.mobile-language-option');
    
    // Elements found and initialized

    // Language switching functionality
    let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    
    // Auto-detect user's language using best practices
    function detectUserLanguage() {
        // Check localStorage first (user preference)
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            const langCode = browserLang.split('-')[0].toLowerCase();
            if (translations[langCode]) {
                return langCode;
            }
        }
        
        // Check Accept-Language header (if available)
        if (navigator.languages && navigator.languages.length > 0) {
            for (let lang of navigator.languages) {
                const langCode = lang.split('-')[0].toLowerCase();
                if (translations[langCode]) {
                    return langCode;
                }
            }
        }
        
        // Default to English
        return 'en';
    }
    
    // Apply language to the page
    function applyLanguage(lang) {
        if (!translations[lang]) return;
        
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update current language display with country letters
        if (currentLanguageElement) {
            const countryCodes = {
                'en': 'EN',
                'el': 'EL',
                'de': 'DE',
                'bg': 'BG'
            };
            currentLanguageElement.textContent = countryCodes[lang] || 'EN';
        }
        
        // Update page content
        updatePageContent(lang);
        
        // Update URL for SEO (without page reload)
        updateURL(lang);
        
        // Update page title and meta description
        updatePageMeta(lang);
    }
    
    // Update page content based on language
    function updatePageContent(lang) {
        const t = translations[lang];
        
        // Update all elements with data-translate attributes
        const menuItems = document.querySelectorAll('[data-translate]');
        menuItems.forEach(item => {
            const key = item.getAttribute('data-translate');
            if (t[key]) {
                // Check if this element has child elements with the same data-translate
                const childWithSameKey = item.querySelector(`[data-translate="${key}"]`);
                if (childWithSameKey) {
                    // Update the child element instead
                    childWithSameKey.textContent = t[key];
                } else {
                    // Update the element itself
                    item.textContent = t[key];
                }
            }
        });
        
        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });
        
        // Update date picker localization
        updateDatePickerLocalization(lang);
    }
    
    // Update date picker localization when language changes
    function updateDatePickerLocalization(lang) {
        const dateRangeInput = document.getElementById('date-range');
        if (dateRangeInput && window.flatpickrInstance) {
            const t = translations[lang];
            if (t) {
                // Update the flatpickr instance with new locale settings
                window.flatpickrInstance.set('locale', {
                    firstDayOfWeek: 1, // Monday
                    weekdays: {
                        shorthand: t.datePickerWeekdaysShort || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        longhand: t.datePickerWeekdays || ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    months: {
                        shorthand: t.datePickerMonths?.map(m => m.substring(0, 3)) || ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        longhand: t.datePickerMonths || ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    rangeSeparator: t.datePickerRangeSeparator || " to ",
                    today: t.datePickerToday || "Today",
                    clear: t.datePickerClear || "Clear",
                    close: t.datePickerClose || "Close"
                });
                
                // Update placeholder
                dateRangeInput.placeholder = t.datePickerPlaceholder || "Select your preferred dates";
            }
        }
    }
    
    // Update URL for SEO without page reload
    function updateURL(lang) {
        const currentUrl = new URL(window.location);
        const pathSegments = currentUrl.pathname.split('/').filter(segment => segment);
        
        // Remove existing language prefix if any
        const supportedLangs = Object.keys(translations);
        if (pathSegments.length > 0 && supportedLangs.includes(pathSegments[0])) {
            pathSegments.shift();
        }
        
        // Add new language prefix (except for English which is default)
        if (lang !== 'en') {
            pathSegments.unshift(lang);
        }
        
        // Update URL
        const newPath = pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/';
        const newUrl = currentUrl.origin + newPath + currentUrl.search;
        
        // Update browser history without reload
        window.history.pushState({ lang: lang }, '', newUrl);
        
        // Update canonical link for SEO
        updateCanonicalLink(newUrl);
    }
    
    // Update canonical link for SEO
    function updateCanonicalLink(url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = url;
    }
    
    // Update page meta tags for SEO
    function updatePageMeta(lang) {
        const t = translations[lang];
        if (!t) return;
        
        // Update page title
        document.title = `Maria Rooms - ${t.heroSubtitle.substring(0, 60)}...`;
        
        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = t.heroSubtitle;
        
        // Update hreflang tags for multilingual SEO
        updateHreflangTags(lang);
    }
    
    // Update hreflang tags for multilingual SEO
    function updateHreflangTags(currentLang) {
        const baseUrl = window.location.origin;
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(segment => segment);
        
        // Remove language prefix if present
        const supportedLangs = Object.keys(translations);
        if (pathSegments.length > 0 && supportedLangs.includes(pathSegments[0])) {
            pathSegments.shift();
        }
        
        // Remove existing hreflang tags
        document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(tag => tag.remove());
        
        // Add new hreflang tags
        Object.keys(translations).forEach(lang => {
            const hreflang = document.createElement('link');
            hreflang.rel = 'alternate';
            hreflang.hreflang = lang;
            
            let url;
            if (lang === 'en') {
                url = baseUrl + (pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/');
            } else {
                url = baseUrl + '/' + lang + (pathSegments.length > 0 ? '/' + pathSegments.join('/') : '');
            }
            
            hreflang.href = url;
            document.head.appendChild(hreflang);
        });
        
        // Add x-default hreflang (English version)
        const xDefault = document.createElement('link');
        xDefault.rel = 'alternate';
        xDefault.hreflang = 'x-default';
        xDefault.href = baseUrl + (pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/');
        document.head.appendChild(xDefault);
    }
    
    // Initialize language
    function initLanguage() {
        // Check if page is already in a specific language based on URL
        const pathSegments = window.location.pathname.split('/').filter(segment => segment);
        let initialLang = 'en'; // default
        
        if (pathSegments.length > 0) {
            const urlLang = pathSegments[0];
            if (translations[urlLang]) {
                initialLang = urlLang;
            }
        }
        
        // If no language in URL, use detected language
        if (initialLang === 'en') {
            initialLang = detectUserLanguage();
        }
        
        // Set initial country code display
        if (currentLanguageElement) {
            const countryCodes = {
                'en': 'EN',
                'el': 'EL',
                'de': 'DE',
                'bg': 'BG'
            };
            currentLanguageElement.textContent = countryCodes[initialLang] || 'EN';
        }
        
        applyLanguage(initialLang);
        
        // Add event listeners for language options
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                applyLanguage(lang);
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        });
        
        mobileLanguageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                applyLanguage(lang);
                
                // Close mobile menu
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
    
    // Initialize language system
    initLanguage();

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            // Mobile menu button clicked!
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }

    // Close mobile menu when clicking outside (not needed for full-screen overlay)
    // Full-screen overlay doesn't need click-outside functionality

    // Dark mode toggle
    if (darkModeToggle) {
        // Dark mode toggle found
        darkModeToggle.addEventListener('click', function() {
            // Dark mode toggle clicked!
            toggleDarkMode();
        });

        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.documentElement.classList.add('dark');
            updateDarkModeIcons(true);
        } else {
            // Ensure light mode icons are shown by default
            updateDarkModeIcons(false);
        }
    }

    // Mobile dark mode toggle
    if (mobileDarkModeToggle) {
        // Mobile dark mode toggle found
        mobileDarkModeToggle.addEventListener('click', function() {
            // Mobile dark mode toggle clicked!
            toggleDarkMode();
        });
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        // Dark mode toggled
        localStorage.setItem('darkMode', isDark);
        updateDarkModeIcons(isDark);
    }

    // Function to update dark mode icons
    function updateDarkModeIcons(isDark) {
        const sunIcon = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        `;
        const moonIcon = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        `;

        if (isDark) {
            if (darkModeToggle) darkModeToggle.innerHTML = sunIcon;
            if (mobileDarkModeToggle) mobileDarkModeToggle.innerHTML = sunIcon;
        } else {
            if (darkModeToggle) darkModeToggle.innerHTML = moonIcon;
            if (mobileDarkModeToggle) mobileDarkModeToggle.innerHTML = moonIcon;
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all stagger items
    document.querySelectorAll('.stagger-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Apartment image carousel functionality
    document.querySelectorAll('.apartment-carousel img').forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });

    // Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        });
    }

    // Header scroll effect removed - navigation stays visible
});

// Image modal functionality
function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90';
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full mx-4">
            <img src="${src}" alt="${alt}" class="w-full h-auto max-h-screen object-contain rounded-lg">
            <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal on escape key
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    notification.className += ` ${bgColor} text-white`;
    
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('blur-in');
                img.classList.add('blur-in');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize section animations
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Hero Carousel Functionality
class HeroCarousel {
    constructor() {
        this.track = document.getElementById('carousel-track');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.slides = document.querySelectorAll('.carousel-slide');
        
        if (!this.track || !this.slides.length) return;
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        
        this.init();
    }
    
    init() {
        // Set initial state
        this.updateCarousel();
        this.updateDots();
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch/swipe support
        this.addTouchSupport();
        
        // Keyboard navigation
        this.addKeyboardSupport();
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause auto-play on hover
        if (this.track.parentElement) {
            this.track.parentElement.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.track.parentElement.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Pause auto-play when tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoPlay();
            } else {
                this.startAutoPlay();
            }
        });
    }
    
    updateCarousel() {
        if (this.isAnimating) return;
        
        const translateX = -this.currentSlide * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.remove('bg-white/60');
                dot.classList.add('bg-white');
            } else {
                dot.classList.remove('bg-white');
                dot.classList.add('bg-white/60');
            }
        });
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
        this.updateDots();
        this.resetAutoPlay();
    }
    
    previousSlide() {
        if (this.isAnimating) return;
        
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
        this.updateDots();
        this.resetAutoPlay();
    }
    
    goToSlide(slideIndex) {
        if (this.isAnimating || slideIndex === this.currentSlide) return;
        
        this.currentSlide = slideIndex;
        this.updateCarousel();
        this.updateDots();
        this.resetAutoPlay();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        const handleTouchStart = (e) => {
            startX = e.touches ? e.touches[0].clientX : e.clientX;
            isDragging = true;
            this.stopAutoPlay();
        };
        
        const handleTouchMove = (e) => {
            if (!isDragging) return;
            currentX = e.touches ? e.touches[0].clientX : e.clientX;
        };
        
        const handleTouchEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
            const threshold = 50; // Minimum swipe distance
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
            
            this.startAutoPlay();
        };
        
        // Touch events
        this.track.addEventListener('touchstart', handleTouchStart, { passive: true });
        this.track.addEventListener('touchmove', handleTouchMove, { passive: true });
        this.track.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        // Mouse events for desktop
        this.track.addEventListener('mousedown', handleTouchStart);
        this.track.addEventListener('mousemove', handleTouchMove);
        this.track.addEventListener('mouseup', handleTouchEnd);
        this.track.addEventListener('mouseleave', handleTouchEnd);
    }
    
    addKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            // Only handle keyboard events when carousel is in focus
            if (!this.track.parentElement.matches(':hover')) return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextSlide();
            }
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel();
    
    // Initialize Swiper Carousel
    if (typeof Swiper !== 'undefined') {
        // Main hero carousel
        const heroSwiper = new Swiper('.hero-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 4000, // 4 seconds between slides
                disableOnInteraction: false, // Continues auto-play after user interaction
                pauseOnMouseEnter: true, // Pauses on hover
                waitForTransition: true, // Waits for transition to complete
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true, // Dynamic pagination bullets
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000, // Slightly slower for smoother transitions
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
            },
            // Enhanced auto-play behavior
            on: {
                init: function() {
                    console.log('Swiper initialized with auto-play');
                },
                slideChange: function() {
                    console.log('Slide changed to:', this.realIndex);
                }
            }
        });
        

    }
});
