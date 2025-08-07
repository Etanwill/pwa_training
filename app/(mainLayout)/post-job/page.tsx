import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import arjectLogo from 

const companies = [
    {id:0, nme: 'Arcjet', logo: }
]
function PostJobPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Hay</CardTitle>
        </CardHeader>
      </Card>
      <div className="col-span-1">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Trusted by Industry Leaders</CardTitle>
            <CardDescription>Join thousands of Companies hie=ring top talents</CardDescription>
          </CardHeader>
          <CardContent>
             
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PostJobPage;
