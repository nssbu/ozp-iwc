describe("Policy Repository Point", function () {

    var prp;
    describe("default behavior and policy acquisition failure.", function () {
        beforeEach(function () {
            prp = new ozpIwc.policyAuth.points.PRP();
        });

        xit("formats server loaded policies as Policy Elements", function () {
        });

        it('sets any policy that cannot be acquired to denyAll', function (done) {


            prp.getPolicies("SOMEFAKEPOLICY")
                .success(function (policies) {
                    expect(policies[0]()).toEqual("Deny");
                    done();
                });
        });

        it('handles no policies in the check', function () {
            prp.getPolicies([])
                .success(function (policies) {
                    expect(policies[0]()).toEqual("Permit");
                });
        });

        it('always applies persistent policies to any policy request', function (done) {

            prp = new ozpIwc.policyAuth.points.PRP({
                'persistentPolicies': ['somePolicy']
            });


            prp.getPolicies([], 'deny-overrides')
                .success(function (policies) {
                    expect(policies.length).toEqual(1);
                    expect(policies[0]()).toEqual("Deny");
                    done();
                });
        });


    });

    describe("policy acquisition success", function () {
        beforeEach(function () {

            // make all policy requests reject to test the denyAll functionality
            spyOn(ozpIwc.util, "ajax").and.callFake(function () {
                return new Promise(function (resolve, reject) {
                    resolve({
                        'response': prp.policyCache['policy://policy/connect']
                    });
                });
            });

            prp = new ozpIwc.policyAuth.points.PRP();
        });

        xit("fetches desired policies.", function (done) {
            prp.fetchPolicy("policy://policy/connect")
                .success(function (policy) {
                    expect(typeof policy).toEqual("function");
                    done();
                });
        });


        it("returns a promise chain with policy evaluation call for the PDP", function (done) {
            prp.getPolicies("policy://policy/connect")
                .success(function (policies) {
                    expect(Array.isArray(policies)).toEqual(true);
                    expect(policies.length).toEqual(1);
                    done();
                });
        });
    });
});
