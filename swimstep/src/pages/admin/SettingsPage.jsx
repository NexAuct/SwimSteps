import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SettingsPage = () => {
  const { toast } = useToast();

  const handleSave = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature In Progress",
      description: "Saving settings is not yet implemented.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Settings | Swim Steps Admin</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and website settings.</p>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Update your personal and contact details.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6 max-w-lg" onSubmit={handleSave}>
              <div className="space-y-2">
                <Label htmlFor="adminName">Admin Name</Label>
                <Input id="adminName" defaultValue="Admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input id="adminEmail" type="email" defaultValue="admin@swimsteps.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Public Contact Phone</Label>
                <Input id="contactPhone" defaultValue="60102325333" />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default SettingsPage;