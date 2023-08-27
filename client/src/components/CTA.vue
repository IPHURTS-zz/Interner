<template>
    <div class="relative py-16 mx-16 my-16">
        <div aria-hidden="true"
            class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <Container>
            <div class="relative">

                <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                    <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Join Our Mailing
                        list
                    </h1>
                    <p class="text-center text-xl text-gray-600 dark:text-gray-300">
                        Join our mailing list to be notified when we launch and receive the latest attachment and internship
                        opportunities directly in your inbox. Don't miss out on valuable chances to enhance your career
                        journey!
                    </p>
                    <form action="#">
                        <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div class="relative w-full">
                                <label for="email"
                                    class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                    address</label>
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                        </path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <input
                                    class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter your email" type="email" id="email" required="">
                            </div>
                        <div>
                            <button type="submit"
                                class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                        </div>
                    </div>
                    <div
                        class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                        We care about the protection of your data. <a href="#"
                            class="font-medium text-blue dark:blue hover:underline">Read our Privacy
                            Policy</a>.</div>
                </form>
            </div>
        </div>
    </Container>
</div></template>