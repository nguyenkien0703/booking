import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import { Box, Flex, Text, Link, VStack } from "@chakra-ui/react";

export default function DefaultLayout() {
    return (
        <Layout className="w-full min-h-screen">
            {/* Header */}
            <Layout.Header className="sticky w-full z-10 top-0 bg-white px-0">
                <Header />
            </Layout.Header>

            {/* Main Content */}
            <Layout.Content className="bg-white">
                <Outlet />
            </Layout.Content>

            {/* Footer */}
            <Layout.Footer style={{ backgroundColor: "#A97142", color: "white", padding: "40px 20px" }}>
                <Flex 
                    maxWidth="1200px" 
                    margin="0 auto" 
                    justifyContent={{ base: "center", md: "space-between" }}
                    gap={{ base: "2rem", md: "1rem" }}
                    wrap="wrap"
                >
                    <Box mb={4} width={{ base: "100%", md: "auto" }} textAlign={{ base: "center", md: "left" }}>
                        <Text fontWeight="bold" fontSize="2xl" mb={4}>
                            Drive Hub
                        </Text>
                    </Box>
                    
                    {/* Các VStack khác giữ nguyên nội dung, chỉ thêm width */}
                    <VStack align={{ base: "center", md: "start" }} spacing={3} width={{ base: "45%", md: "auto" }}>
                        <Text fontSize="lg" fontWeight="bold">Company</Text>
                        <Link href="#" color="white">About</Link>
                        <Link href="#" color="white">Careers</Link>
                        <Link href="#" color="white">Partnerships</Link>
                        <Link href="#" color="white">Blog</Link>
                        <Link href="#" color="white">Advertising</Link>
                        <Link href="#" color="white">How we work</Link>
                    </VStack>
                    
                    <VStack align={{ base: "center", md: "start" }} spacing={3} width={{ base: "45%", md: "auto" }}>
                        <Text fontSize="lg" fontWeight="bold">Policies</Text>
                        <Link href="#" color="white">Privacy</Link>
                        <Link href="#" color="white">Terms of Use</Link>
                        <Link href="#" color="white">Accessibility</Link>
                        <Link href="#" color="white">Cookies</Link>
                    </VStack>
                    
                    <VStack align={{ base: "center", md: "start" }} spacing={3} width={{ base: "45%", md: "auto" }}>
                        <Text fontSize="lg" fontWeight="bold">Help</Text>
                        <Link href="#" color="white">Support</Link>
                        <Link href="#" color="white">Cancel your booking</Link>
                        <Link href="#" color="white">Refund policies</Link>
                        <Link href="#" color="white">Use a coupon</Link>
                        <Link href="#" color="white">Travel documents</Link>
                    </VStack>
                    
                    <VStack align={{ base: "center", md: "start" }} spacing={3} width={{ base: "45%", md: "auto" }}>
                        <Text fontSize="lg" fontWeight="bold">More</Text>
                        <Link href="#" color="white">Airline fees</Link>
                        <Link href="#" color="white">Airlines</Link>
                        <Link href="#" color="white">Low fare trips</Link>
                        <Link href="#" color="white">Badges & Certificates</Link>
                    </VStack>
                </Flex>
                <Text textAlign="center" marginTop={{ base: "30px", md: "20px" }} fontSize="sm">
                    ©2021 Created by <Link href="#" color="white">TDB</Link>
                </Text>
            </Layout.Footer>
        </Layout>
    );
}
