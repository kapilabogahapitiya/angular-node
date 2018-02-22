CustomerService.$inject = ['$q', 'RestApiService', 'FIRSTNEAR_CONSTANTS', '$window','localStorageService','RestangularService'];

export default function CustomerService($q, RestApiService, FIRSTNEAR_CONSTANTS, $window,localStorageService,RestangularService) {
    var service = {
        getProfileData:getProfileData,
        doBook:doBook,
        doRatingStars:doRatingStars,
        heartNext: heartNext,
        addAnonymousQuote: addAnonymousQuote,
        registerCustomer: registerCustomer,
        verifyPhoneNumber: verifyPhoneNumber,
    };

    return service;
    
    function getProfileData(profileNumber) {

        var profileData = {
            name :'Jqcqueline Sinex',
            address: 'Union City, New Jersey 07087',
            rate : '145',
            distance: '450',
            about: '<p><b>For as long as I can remember, I have always had a camera in my hands just snapping away and driving everybody crazy. Photography is my outlet, my release. I love exploring and learning new things.</b></p><p><b>We have 4 amazing kids! And they have always been my inspiration.</b></p><p>To ALL of you, Thank you for believing in me. I am not mentioning any names lest I should forget someone, but you all know who you are.</p><h5><b>- Jacqueline Sinex</b></h5><div class="categories-about"><p><b> CATEGORIES : </b> Children, Kids, Events, Family, Lifestyle, Seniors, Wedding </p></div>',
            services:[
                {
                    title:'Professional Portrait',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
                    time: '60',
                    sar: '176'
                },
                {
                    title:'Professional Portrait',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
                    time: '60',
                    sar: '176'
                }
                
            ],
            offers: [
                {
                    title: "Book for the summer and get ",
                    offPercentage: "30",
                    validDate: '20 March, 2018 '
                },
                {
                    title: "Book for the summer and get ",
                    offPercentage: "30",
                    validDate: '20 March, 2018 '
                }
            ],
            phoneNumber: '123-456-789',
            email : 'ferry@gmail.com',
            licenseNumber: '83763836383',
            whatsapp: 'whatsapp url',
            instagram: 'instagram url',
            studio: 'studio',
        };
        return profileData;     

    }
    function doBook(){
    
    }
    
    function doRatingStars(){

    }
    function heartNext(){

    }
    function addAnonymousQuote(quoteData){
        return RestangularService.all('customer/anonymous/quote/add').post(quoteData);
    }
    function registerCustomer(data){
        return RestangularService.all('customer/register').post(data);
    }
    function verifyPhoneNumber(data){
        return RestangularService.all('customer/verify/phone').post(data);
    };
}