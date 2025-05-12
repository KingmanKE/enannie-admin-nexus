
import React from 'react';
import { 
  Save, 
  Shield, 
  Mail, 
  Bell, 
  CreditCard,
  User,
  FileText,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem, 
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Settings</h1>
        <p className="text-muted-foreground">Manage platform settings and configuration</p>
      </div>

      <Tabs defaultValue="general">
        <div className="flex flex-col md:flex-row gap-6">
          <TabsList className="mb-6 md:mb-0 md:flex-col md:h-fit md:w-48">
            <TabsTrigger value="general" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="security" className="w-full justify-start">
              <Lock className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="email" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </TabsTrigger>
            <TabsTrigger value="payment" className="w-full justify-start">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment
            </TabsTrigger>
            <TabsTrigger value="verification" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Verification
            </TabsTrigger>
            <TabsTrigger value="account" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Admin Account
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="general" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>
                    Configure global platform settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="ENNANIE" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="support-email">Support Email</Label>
                    <Input id="support-email" type="email" defaultValue="support@ennanie.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Contact Phone Number</Label>
                    <Input id="contact-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Default Timezone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                        <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                        <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                        <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                        <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable maintenance mode to prevent user access during updates
                      </p>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-registrations">Allow New Registrations</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow new users to register on the platform
                      </p>
                    </div>
                    <Switch id="allow-registrations" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                  <CardDescription>
                    Update your platform's privacy policy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    className="min-h-[200px]"
                    placeholder="Enter your privacy policy text here..."
                    defaultValue="The ENNANIE privacy policy outlines how we collect, use, and safeguard your personal information when you use our platform..."
                  />
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Update Privacy Policy
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Configure security options for the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="password-policy">Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger id="password-policy">
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic (minimum 8 characters)</SelectItem>
                        <SelectItem value="standard">Standard (8 characters, mixed case, numbers)</SelectItem>
                        <SelectItem value="strong">Strong (8 characters, mixed case, numbers, symbols)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="60" />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor">Require Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Enforce two-factor authentication for all admin users
                      </p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-logout">Automatic Logout on Inactivity</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically log out inactive users
                      </p>
                    </div>
                    <Switch id="auto-logout" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Security Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Configure system notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Admin Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-new-users">New User Registrations</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new users register
                        </p>
                      </div>
                      <Switch id="notify-new-users" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-verifications">Verification Submissions</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when caregivers submit verification documents
                        </p>
                      </div>
                      <Switch id="notify-verifications" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-payments">Payment Processing</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts for payment transactions and issues
                        </p>
                      </div>
                      <Switch id="notify-payments" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-reports">User Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when users submit reports or complaints
                        </p>
                      </div>
                      <Switch id="notify-reports" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="notify-errors">System Errors</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts for critical system errors
                        </p>
                      </div>
                      <Switch id="notify-errors" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Notification Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="email" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Configuration</CardTitle>
                  <CardDescription>
                    Configure email sending settings and templates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-host">SMTP Host</Label>
                      <Input id="smtp-host" defaultValue="smtp.example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">SMTP Port</Label>
                      <Input id="smtp-port" type="number" defaultValue="587" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-username">SMTP Username</Label>
                      <Input id="smtp-username" defaultValue="admin@ennanie.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-password">SMTP Password</Label>
                      <Input id="smtp-password" type="password" defaultValue="••••••••••••" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label htmlFor="from-email">From Email Address</Label>
                    <Input id="from-email" defaultValue="no-reply@ennanie.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email-footer">Email Footer Text</Label>
                    <Textarea 
                      id="email-footer"
                      className="min-h-[100px]"
                      defaultValue="ENNANIE - Connecting parents with qualified caregivers. This email was sent from a notification-only address that cannot accept incoming email."
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Test Email Config</Button>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Email Settings
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Email Templates</CardTitle>
                  <CardDescription>
                    Configure system email templates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="template-type">Select Template</Label>
                    <Select defaultValue="welcome">
                      <SelectTrigger id="template-type">
                        <SelectValue placeholder="Select email template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="welcome">Welcome Email</SelectItem>
                        <SelectItem value="reset-password">Password Reset</SelectItem>
                        <SelectItem value="verification">Account Verification</SelectItem>
                        <SelectItem value="payment-receipt">Payment Receipt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="template-subject">Email Subject</Label>
                    <Input id="template-subject" defaultValue="Welcome to ENNANIE!" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="template-content">Email Content</Label>
                    <Textarea 
                      id="template-content"
                      className="min-h-[200px]"
                      defaultValue="Hi {{name}},\n\nWelcome to ENNANIE! We're excited to have you join our community of parents and caregivers.\n\nTo get started, please complete your profile and explore the platform features.\n\nIf you have any questions, don't hesitate to contact our support team.\n\nBest regards,\nThe ENNANIE Team"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Preview Template</Button>
                  <Button>Save Template</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                  <CardDescription>
                    Configure payment gateways and transaction settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="payment-gateway">Default Payment Gateway</Label>
                    <Select defaultValue="stripe">
                      <SelectTrigger id="payment-gateway">
                        <SelectValue placeholder="Select payment gateway" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select default currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                        <SelectItem value="cad">CAD (C$)</SelectItem>
                        <SelectItem value="aud">AUD (A$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API Key</Label>
                      <Input id="api-key" defaultValue="••••••••••••••••••••••••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="api-secret">API Secret</Label>
                      <Input id="api-secret" defaultValue="••••••••••••••••••••••••••••••" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="test-mode">Test Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Process payments in test mode (no real charges)
                      </p>
                    </div>
                    <Switch id="test-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="automatic-receipts">Automatic Receipts</Label>
                      <p className="text-sm text-muted-foreground">
                        Send email receipts for all transactions
                      </p>
                    </div>
                    <Switch id="automatic-receipts" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Payment Settings
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Transaction Fees</CardTitle>
                  <CardDescription>
                    Configure platform transaction fees
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform-fee">Platform Fee (%)</Label>
                    <Input id="platform-fee" type="number" defaultValue="5" />
                    <p className="text-xs text-muted-foreground">
                      Percentage fee charged on each transaction
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="min-fee">Minimum Transaction Fee ($)</Label>
                    <Input id="min-fee" type="number" defaultValue="1.00" />
                    <p className="text-xs text-muted-foreground">
                      Minimum fee charged regardless of transaction amount
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Fee Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="verification" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verification Requirements</CardTitle>
                  <CardDescription>
                    Configure document verification requirements for caregivers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Required Documents</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Switch id="id-verification" defaultChecked />
                        <Label htmlFor="id-verification">Government ID Verification</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="background-check" defaultChecked />
                        <Label htmlFor="background-check">Background Check</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="certifications" defaultChecked />
                        <Label htmlFor="certifications">Professional Certifications</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="references" defaultChecked />
                        <Label htmlFor="references">Professional References</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch id="proof-address" />
                        <Label htmlFor="proof-address">Proof of Address</Label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="verification-process">Verification Process</Label>
                    <Select defaultValue="manual">
                      <SelectTrigger id="verification-process">
                        <SelectValue placeholder="Select verification process" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automatic">Automatic (AI-powered)</SelectItem>
                        <SelectItem value="manual">Manual Review</SelectItem>
                        <SelectItem value="hybrid">Hybrid (AI + Manual Review)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="verification-expiry">Verification Expiry (days)</Label>
                    <Input id="verification-expiry" type="number" defaultValue="365" />
                    <p className="text-xs text-muted-foreground">
                      Number of days before verification documents expire and need renewal
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Verification Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="mt-0 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Account Settings</CardTitle>
                  <CardDescription>
                    Manage your admin account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-name">Full Name</Label>
                      <Input id="admin-name" defaultValue="Admin User" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email Address</Label>
                      <Input id="admin-email" type="email" defaultValue="admin@ennanie.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="admin-role">Role</Label>
                    <Input id="admin-role" defaultValue="Super Admin" disabled />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Update Account
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
